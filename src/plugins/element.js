import Vue from 'vue'
import { Form, FormItem, Button, Input, 
    Message, Container, Header,
    Aside, Main, Menu, Submenu,
    MenuItemGroup, MenuItem ,Breadcrumb,
    BreadcrumbItem, Card, Row,
    Col, Table, TableColumn, Switch,
    Tooltip, Pagination, Dialog,
    MessageBox} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
// 全局挂载
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
