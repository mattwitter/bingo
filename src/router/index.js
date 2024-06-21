/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home2 from '../views/Home2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Unmerged Bingo',
    component: Home2,
  }
]

const router = new VueRouter({
  routes,
  mode: "history", // remove # from URL
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router