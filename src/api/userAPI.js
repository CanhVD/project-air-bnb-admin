import axiosAPI from '.'
export const postUserRegister = (registerUser) => {
  return axiosAPI.post("api/v1/Authentications/register", registerUser)
}

export const postUserLogin = (loginUser) => {
  return axiosAPI.post("/api/v1/Authentications/login", loginUser)
}

export const putChangePassword = (changePassword) => {
  console.log(changePassword)
  return axiosAPI.put("/api/v1/Authentications/change-password", changePassword)
}

export const putChangeProfile = (changeProfile) => {
  console.log(changeProfile)
  return axiosAPI.put("/api/v1/Authentications/change-profile", changeProfile)
}
