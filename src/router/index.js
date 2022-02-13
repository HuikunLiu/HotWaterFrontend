import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserCenter from '@/views/UserCenter'
import About from '@/components/About'
import Index from '@/components/Index'


Vue.use(Router)
var router = new Router({
  
  routes: [{
      path: '/',
      component: Login
    },
    {
      path: '/about',
      component: About
    }, 
    {
      path: '/index',
      component: Index,
      children: [{
          path: '/userCenter',
          component: UserCenter
        }
      ]
    }
  ]
});
//全局守卫
router.beforeEach((to, from, nex) => {
  if (to.path == '/') {
    nex();
  } else if (to.path == "/index") {
    if (localStorage.getItem("token")) {
      nex({
        path: '/userCenter'
      })
    } else {
      nex();
    }
  } else if (to.path == "/about") {
    nex();
  } else {
    if (localStorage.getItem("token")) {
      nex();
    } else {
      nex({
        path: '/'
      })
    }
  }

})

export default router;