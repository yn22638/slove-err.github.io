import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '*',
        component: () =>
            import ('../views/error')
            // redirect: '/404'
    },
    {
        path: '/',
        redirect: {
            name: 'homepage'
        },
        component: () =>
            import ('../views/blog'),
        children: [{
            path: 'homepage',
            name: 'homepage',
            component: () =>
                import ('../views/homePage')
        }]
    },
    {
        path: '/demo',
        name: 'demo',
        component: () =>
            import ('../views/demo.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router