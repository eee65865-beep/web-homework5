import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/element/UserView.vue'
import QuestionView from '@/views/element/QuestionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  },
  {
    path: '/question',
    name: 'question',
    component: QuestionView
  }
]

const router = new VueRouter({
  routes
})

export default router
