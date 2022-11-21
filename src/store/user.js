import { defineStore } from 'pinia'
export const user= defineStore('user',{
    state: () => { 
        return {
            token: '',
            //清除用户信息
            userInfo: {},
            cartList: [],//购物车数据
            selectList: [],//选中的商品的id
            orderList:[],//结算的商品
        }
    },
    getters: {
        //是否全选中
        isChecked() {
            return this.selectList.length == this.cartList.length
        },
        //总价和数量
        total() { 
            let total = {
                price: 0,
                number:0
            }
            this.orderList=[]
            this.cartList.forEach(v => { 
                if (this.selectList.indexOf(v.id) != -1) { 
                    total.price += v.counter * v.discountPrice
                    total.number = this.selectList.length
                    this.orderList.push({
                        number: 1,
                        id:v.courseId
                    })
                }
            })
            return total
        }
    },
    actions: {
        setToken(token) { 
            this.token=token
        },
        addCart(list) { 
            this.selectList=[]
            list.forEach(v => {
                v['check'] = true;
                this.selectList.push(v.id)
            })
            this.cartList = list;
        },
        //全选
        all() { 
            this.selectList = this.cartList.map(v => { 
                v['check'] = true
                return v.id
            })
        },
        //全不选
        unAll() { 
            this.cartList.forEach(v=> { 
               v['check']=false
            })
            this.selectList=[]
        },
        //单选
        itemCheck(index) { 
          //当前点击id
            let id = this.cartList[index].id
            //去检查selectList中有没有
            let idx = this.selectList.indexOf(id)
            if (idx > -1) {
                //有
                this.cartList[index].check = false
                this.selectList.splice(idx,1)
            }
            else { 
                this.cartList[index].check = true
                this.selectList.push(id)
            }
        },
        //清除token
        clearToken() { 
            this.token = ''
            //清除用户信息
            this.userInfo = {};
        }
    },
    //开启数据缓存
    persist: {
        enabled: true,
        strategies: [{
            key: 'my_user',
            storage:localStorage
        }]
    },

})