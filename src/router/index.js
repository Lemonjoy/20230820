import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/User.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/', redirect: '/login' },
  {
    path: '/home', component: Home,
    redirect:'/welcome', //重定向到welcome中
    children: [// children存放子路由地址
      { path: '/welcome', component: Welcome },// compinent组件
      { path :'/users' , component: Users },
      { path :'/rights' , component: Rights },
      { path :'/roles' , component: Roles }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => { // to是将要访问的路径；from是从哪个路径跳转而来；next是函数，表示放行
  // next() 放行，next('/login) 强制跳转
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  // 如果存在则放行
  next()
})
export default router
