import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

/** 路由白名单 */
// const whiteList = ["/login", "/register", "/home"];

router.beforeEach((to, from, next) => {
  console.log(to, from);
  // 路由守卫
  if(!to.matched.length){
    console.log("出错啦");
  } else {
    const token = localStorage.getItem("token")
    const routeName = to.name
    console.log(routeName);
    if(routeName) {
      if(token) {
        next()
      }else{
        router.push('/login')
      }
    }
  }
});

export default router
