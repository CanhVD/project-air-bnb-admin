import axiosAPI from '.'

export const getRooms = (isActive = true) => {
  return axiosAPI.get(`api/v1/Rooms?isActive=${isActive}`)
}

export const getRoomById = (roomId) => {
  return axiosAPI.get(`api/v1/Rooms/${roomId}`)
}
