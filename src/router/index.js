import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProfileView from '../views/MyProfileView.vue'
import LoginView from '../views/LoginView.vue'
import AddRoomView from '../views/RoomManager/AddRoomView.vue'
import ListRoomView from '../views/RoomManager/ListRoomView.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfileView,
  },
  {
    path: '/add-room',
    name: 'AddRoomView',
    component: AddRoomView,
  },
  {
    path: '/list-room',
    name: 'ListRoomView',
    component: ListRoomView,
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
