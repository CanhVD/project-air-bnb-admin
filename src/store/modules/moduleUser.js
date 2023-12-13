import router from '@/router'
import { postUserRegister } from '../../api/userAPI'
import { postUserLogin } from '../../api/userAPI'
import { putChangePassword } from '../../api/userAPI'
import { putChangeProfile } from '../../api/userAPI'
import configs from '../../configs'


const state = () => ({
  userDetail: {}
})

const mutations = {
  setUserDetailMutation(state, data) {
    state.userDetail = data.user
    localStorage.setItem("userLogin", JSON.stringify(data));
    if (data.token)
      configs.tokenByClass = data.token
  },

  setUserLoginFromLocalStorage(state, data) {
    state.userDetail = data.user
    configs.tokenByClass = data.token
  },

  logOutUserMutation(state) {
    state.userDetail = {}
  }
}

const actions = {
  async postUserRegisterAction(context, userRegister) {
    try {
      const res = await postUserRegister(userRegister)
      alert("Tạo tài khoản thành công")
      router.push("/login")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }

  },

  async postUserLoginAction(context, { userLogin, router }) {
    try {
      const res = await postUserLogin(userLogin)
      context.commit("setUserDetailMutation", res)
      router.push("/home")

    } catch (error) {
      alert(error.message)
    }
  },

  logOutUserAction(context) {
    localStorage.removeItem("userLogin")
    context.commit("logOutUserMutation")
  },

  loadUserLoginFromLocalStorageAction(context) {
    let userLogin = {};
    if (localStorage.getItem("userLogin")) {
      userLogin = JSON.parse(localStorage.getItem("userLogin"));
      context.commit("setUserLoginFromLocalStorage", userLogin);
    }
  },

  async changePasswordAction(context, changePassword) {
    try {
      console.log(changePassword)
      await putChangePassword(changePassword)
      alert("Thay đổi mật khẩu thành công")

    } catch (error) {
      alert("Thay đổi mật khẩu thất bại")
    }
  },

  async changeProfileAction(context, changeProfile) {
    try {
      console.log(changeProfile)
      const res = await putChangeProfile(changeProfile)
      alert("Thay đổi thông tin thành công")
      context.commit("setUserDetailMutation", res)
    } catch (error) {
      alert("Thay đổi thông tin thất bại")
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
