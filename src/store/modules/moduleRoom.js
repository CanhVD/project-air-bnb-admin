import { getRooms, getRoomById } from '../../api/roomAPI'

const state = () => ({
  dataRoom: {},
  roomDetail: {}
})

const getters = {
  dataRoom(state) {
    return state.roomDetail
  }
};

const mutations = {
  setDataRoomMutation(state, data) {
    state.dataRoom = data
  },

  setRoomMutation(state, data) {
    state.roomDetail = data
  },
}

const actions = {
  async getRoomsAction(context, isActive) {
    try {
      const data = await getRooms(isActive)
      context.commit('setDataRoomMutation', data)
    } catch (error) {
      alert(error)
    }

  },

  async getRoomByIdAction(context, roomId) {
    try {
      const data = await getRoomById(roomId)
      context.commit('setRoomMutation', data)
    } catch (error) {
      alert(error)
    }

  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
