import { createRouter, createWebHistory } from 'vue-router'
import { RouterView } from 'vue-router'
// import { authtentication } from '@/middleware/routeMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'dashboard'}
    },
    {
      path: '/dashboard',
      component: import('@/layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: import('@/views/Dashboard.vue')
        },
        {
          path: 'purchase/product',
          name: 'purchase-product',
          component: import('@/views/PurchaseProduct.vue')
        },
        {
          path: 'purchase/request-posting',
          name: 'request-posting',
          component: import('@/views/PurchaseRequestPosting.vue')
        },
        {
          path: 'items/request-draft',
          name: 'item-request-draft',
          component: import('@/views/items/RequestDraft.vue')
        },
        {
          path: 'items/request-posting',
          name: 'item-request-posting',
          component: import('@/views/items/RequestPosting.vue')
        },
        {
          path: 'items/request-closing',
          name: 'item-request-closing',
          component: import('@/views/items/RequestClosing.vue')
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: import('@/views/auth/Signin.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: import('@/views/errors/Page404.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const authUser = authtentication()

//   if (to.name === 'notfound') next()
//   if (to.name !== 'signin' && !authUser) next({name: 'signin'})
//   if (to.name === 'signin' && authUser) next({name: 'dashboard'})
//   else next()
// })

export default router
