import axiosAPI from '.'
export const getLocationByNameAPI = (locationName) => {
  return axiosAPI.get(`/api/v1/Locations/getName?name=${locationName}`)
}

export const getLocations = () => {
  return axiosAPI.get('https://localhost:44356/api/v1/Locations')
}
