<template>
   <!-- User Menu -->
   <div class="user-menu" v-if="userDetail.userName">
          <div class="user-name" v-if="userDetail.avatar" @click="handleDisplaySetting"><span><img :src="userDetail.avatar" alt=""></span>Xin chào, {{ userDetail.fullName }}</div>
          <div class="user-name" v-else @click="handleDisplaySetting"><span><img src="images/dashboard-avatar.jpg" alt=""></span>Xin chào, {{ userDetail.fullName }}</div>
          <ul v-show="myProfile">
            <li><router-link to="/my-profile"><i class="sl sl-icon-settings"></i> My Profile</router-link></li>
            <li><a href="dashboard-messages.html"><i class="sl sl-icon-envelope-open"></i> Messages</a></li>
            <li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li>
            <li><a href="#" @click="notificationVisible = true, myProfile=false"><i class="sl sl-icon-power"></i> Logout</a></li>
          </ul>
        </div>
        <div v-else>
          <router-link to="/login" class="sign-in popup-with-zoom-anim"><i class="sl sl-icon-login"></i> Sign In</router-link>
          <router-link to="/signup" class="button border with-icon">Sign Up <i class="sl sl-icon-plus"></i></router-link>
        </div>
        <div v-show="notificationVisible">
          <the-notification :notificationTitle="notificationTitle" :notificationContent="notificationContent" :handleSubmit="handleLogOutUser" :handleClose="handleCloseNotification"></the-notification>
        </div>
</template>

<script>
import router from '@/router'
import { createNamespacedHelpers } from 'vuex'
const {mapState,mapActions } = createNamespacedHelpers('moduleUser')
export default {
  data(){
    return {
      myProfile: false,
      notificationTitle: "Đăng xuất",
      notificationContent: "Bạn có chắc muốn đăng xuất không?",
      notificationVisible: false
    }
  },
  created(){
    this.loadUserLoginFromLocalStorageAction()
  },
  computed: {
		...mapState({
			userDetail: state => state.userDetail,
		}),
	},

  methods:{
    handleDisplaySetting(){
      this.myProfile = !this.myProfile
    },
    handleLogOutUser(){
      this.logOutUserAction()
      router.push("/")
      this.notificationVisible = false
    },
    handleCloseNotification(){
      this.notificationVisible = false
    },
    ...mapActions({
      loadUserLoginFromLocalStorageAction: "loadUserLoginFromLocalStorageAction",
      logOutUserAction: "logOutUserAction"
    })
  }
}
</script>

<style>

</style>