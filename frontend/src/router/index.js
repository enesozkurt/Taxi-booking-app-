import { createRouter, createWebHistory } from 'vue-router'
import PassengersView from '../views/PassengersView.vue'
import PassengerView from '../views/PassengerView'

const routes = [
  {
    path: '/',
    name: 'Passengers',
    component: PassengersView
  },
  {
    path: '/passengers/:passengerId',
    name: 'Passenger',
    component: PassengerView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
