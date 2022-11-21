import request from './axios'
//获取一级分类
export function getFirstCategorys() { return request({ url: '/api/course/category/getFirstCategorys' }) }
//获取二级分类
export function getSecondCategorys(params) { return request({ url: '/api/course/category/getSecondCategorys', params }) }
//查询课程标签
export function tagsList(data) { return request({ url: '/api/course/tags/list', method: 'post', data }) }
//查询课程
export function searchCourse(data) { return request({ url: '/api/course/search', method: 'post', data }) }
//图片轮播图
export function getSliders() { return request({ url: '/api/slider/getSliders' }) }
//查询最新课程
export function newCourse(data) { return request({ url: '/api/course/mostNew', method: 'post', data }) }
//获取网站配置
export function setting() { return request({ url: '/api/setting/get' }) }
//课程详情
export function getCourseDetail(params) { return request({ url: '/api/course/getDetail', params }) }
//登录
export function loginByJson(data) { return request({ url: '/api/u/loginByJson', method: 'post', data }) }
// 获取验证图片  以及token
export function reqGet(data) { return request({ url: '/api/captcha/get', method: 'post', data }) }
// 滑动或者点选验证
export function reqCheck(data) { return request({ url: '/api/captcha/check', method: 'post', data }) }
//发送注册或登录验证码
export function sendCaptcha( params ){return request({url:'/api/sms/sendRegisterOrLoginCaptcha',params})}
//手机验证码登录
export function loginByMobile( data ){return request({url:'/api/u/loginByMobile',method:'post',data})}
//获取用户信息
export function getInfo( params){return request({url:'/api/member/getInfo',params})}
//创建token
export function createToken() { return request({ url: '/api/token/createToken' }) }
//退出登录
export function logout() { return request({ url: '/api/u/logout' }) }

//是否有下载权限
export function courseCheckAuth(params) { return request({ url: '/api/course/checkAuth', params }) }
//下载资料
export function downloadAttachment(params) { return request({ url: '/api/course/downloadAttachment', params, responseType: 'blob' }) }

//课程播放
export function play(params) { return request({ url: '/api/player/play', params }) }
//记录播放历史
export function recordHistory(data) { return request({ url: '/api/course/history/recordHistory',method:'post',data}) }
//更新最后一次记录
export function getLastHistoryByChapterId(params) { return request({ url: '/api/course/history/getLastHistoryByChapterId',params}) }

//获取购物车数据
export function cart() { return request({ url: '/api/shopcar/getShopCarList' }) }
//删除购物车的商品
export function deleteCart(params, token) { return request({ url: '/api/shopcar/deleteShopCar', params, headers: { token } }) }
//加入购物车
export function addShopCar(data, token) { return request({ url: '/api/shopcar/addShopCar', method: "post", data, headers: { token } }) }
//去结算接口
export function settlement(data) { return request({ url: '/api/order/settlement', method: "post", data }) }
//微信结算
export function wxcreateOrder(data) { return request({ url: '/api/pay/wxpay/createOrder', method:"post",data})}
//支付宝结算
export function alicreateOrder(data) { return request({ url: '/api/pay/alipay/createOrder', method:"post",data})}
//查询支付宝订单支付状态
export function aliqueryOrder(params) { return request({ url: '/api/pay/alipay/queryOrder', params})}
//查询微信订单支付状态
export function wxqueryOrder(params) { return request({ url: '/api/pay/wxpay/queryOrder', params})}
//支付成功后批量删除购物车数据
export function deleteShopCars(ids,token) { return request({url:'/api/shopcar/deleteShopCars',method:'post',data:ids, headers: { token }})}