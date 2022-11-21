import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { user } from '../store/user'
const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home,
    },
    {
        path: '/info/:id',
        name: 'Course_info',
        component:()=>import("@/views/Course_info.vue")
    },
    {
        path: '/course',
        name: 'Course',
        component:()=>import("@/views/Course.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component:()=>import("@/views/Login.vue")
    },
    {
        path: '/course-play/:courseId/:chapterId',
        name: 'course-play',
        component:()=>import("@/views/CoursePlay.vue")
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import("@/views/Cart.vue"),
        //给购物车页面加入导航守卫
        beforeEnter: (to, from, next) => {
            //如果用户是登录状态
            if (user().userInfo.id) {
                next()
            }//如果用户没有登录，则跳转到登录状态
            else { 
                next('/login')
            }
        }
    },
    {
        path: '/confirmOrder',
        name: 'ConfirmOrder',
        component: () => import("@/views/ConfirmOrder.vue"),
        //给结算页面加入导航守卫
        beforeEnter: (to, from, next) => {
            //如果用户是登录状态
            if (user().userInfo.id) {
                next()
            }//如果用户没有登录，则跳转到登录状态
            else { 
                next('/login')
            }
        }
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;