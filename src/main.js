import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// ����ȫ����ʽ��
import './assets/css/global.css'
// ��������ͼ��
import './assets/font/iconfont.css'
import './assets/font_kc/iconfont.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/' // ��������ĸ�·��
// ����������;config���������
axios.interceptors.request.use(config => {
  console.log(config)
  // Ϊ����ͷ�������token��֤��authorization�ֶ�
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios // ����ԭ�͵����ԣ�����http����
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
