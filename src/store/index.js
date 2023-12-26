import { createStore } from 'vuex'
import moduleUser from './modules/moduleUser'
import moduleRoom from './modules/moduleRoom'
import moduleLocation from './modules/moduleLocation'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleUser,
    moduleRoom,
    moduleLocation
  }
})
