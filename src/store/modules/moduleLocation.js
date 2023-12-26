import { getLocationByNameAPI, getLocations } from '../../api/locationAPI'

const state = () => ({
  listLocation: [],
  locationName: '',
  district: '',
  country: ''
})

// const getters = {
//   userListBySearchName(state) {
//     const {listLocation } = state;
//     return listLocation.filter((location) =>
//       user.name.toLowerCase().includes(searchName.toLowerCase())
//     );
//   },
// };

const mutations = {
  setLocationMutation(state, data) {
    state.listLocation = data
  },

  setLocationChangeMutation(state, { locationName, district, country }) {
    if (locationName) state.locationName = locationName
    else state.locationName = ''
    if (district) state.district = district
    else state.district = ''
    if (country) state.country = country
    else state.country = ''
    console.log(state.listLocation, state.locationName, state.district, state.country)
  }
}

const getters = {
  getLocationGetter(state) {

    return state.listLocation.filter(location => location.locationName.includes(state.locationName)
      && location.district.includes(state.district) && location.country.includes(state.country)
    )

  }
}


const actions = {
  async getLocationByNameAction(context, locationName) {
    try {
      const data = await getLocationByNameAPI(locationName)
      context.commit('setLocationMutation', data)
    } catch (error) {
      alert(error)
    }

  },

  async getLocationsAction(context) {
    try {
      const data = await getLocations()
      context.commit('setLocationMutation', data)
    } catch (error) {
      alert(error)
    }

  },

  clearStateLocationAction(context) {
    context.commit('setLocationMutation', [])
  },

  handleChangeLocalAction(context, { locationName, district, country }) {
    context.commit('setLocationChangeMutation', { locationName, district, country })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
