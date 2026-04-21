import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReviewDetail from '../views/ReviewDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/review/:id',
    name: 'review',
    component: ReviewDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router