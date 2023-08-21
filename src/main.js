import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/font/iconfont.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/' // 设置请求的根路径
Vue.prototype.$http = axios // 挂载原型的属性，发起http请求
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
