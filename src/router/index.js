import {createWebHistory, createRouter} from 'vue-router'


const routes = [
  {
    path:'/',
    name: 'Home',
    redirect: '/main',
    component: () => import('@/view/Home.vue'),
    children: [{path: '/main', component: () => import('@/view/Home.vue')}]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/view/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
