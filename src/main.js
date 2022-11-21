import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//引入Pinia的持久化存储插件
import piniaPersist from 'pinia-plugin-persist'
//引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入组件
import vue3videoplay from 'vue3-video-play'
//引入css
import "vue3-video-play/dist/style.css"
const pinia = createPinia()
//使用插件
pinia.use(piniaPersist)

createApp(App).use(pinia).use(router).use(ElementPlus).use(vue3videoplay).mount('#app')
