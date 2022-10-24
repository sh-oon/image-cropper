import {createWebHistory, createRouter} from 'vue-router'


const routes = [
  {
    path:'/',
    name: 'Home',
    component: () => import('@/view/Index.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
