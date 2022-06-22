import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('../views/error'),
  },
  {
    path: '/',
    component: () => import('../views/blog'),
    children: [
      {
        path: '/',
        name: 'homepage',
        component: () => import('../views/homePage'),
      },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/demo.vue'),
  },
  {
    path: '/sign-board',
    name: 'SignBoard',
    component: () => import('../views/signature-board/index.vue'),
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
