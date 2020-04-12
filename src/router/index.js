import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/components/Login/login.vue'
import Home from '@/components/Home/home.vue'
import Ide from '@/components/Ide/MyLayout.vue' 

Vue.use(Router)
 
/*配置路由*/
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/ide',
      name:'Ide',
      component:Ide
    }
  ]
})