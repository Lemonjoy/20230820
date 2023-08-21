import Vue from 'vue'
import { Form, FormItem, Button, Input, Message } from 'element-ui'
// 弹窗提示组件，需要全局挂载Message


Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.prototype.$message = Message
