import axios from 'axios'
import { user} from '../store/user'
//创建axios对象
const request = axios.create({
    timeout: 40000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    },
  })
//请求拦截器
request.interceptors.request.use(config => { 
    const userStore = user()
    let token = userStore.token
    //如果token存在，则传过去
    if (token) { 
        config.headers['Authorization']=token
    }
    return config
}, error => { 
    Promise.reject(error)
})
//响应拦截
request.interceptors.response.use(response=> { 
//判断code码
    return response.data
}, error => { 
    Promise.reject(error)
})
export default request