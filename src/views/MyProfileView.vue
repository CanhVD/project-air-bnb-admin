<template>
  	<!-- Content
	================================================== -->
	<div class="dashboard-content" >

<!-- Titlebar -->
<div id="titlebar">
  <div class="row">
    <div class="col-md-12">
      <h2>My Profile</h2>
      <!-- Breadcrumbs -->
      <nav id="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
          <li>My Profile</li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<div class="row">

  <!-- Profile -->
  <form @submit.prevent="handleChangeProfile">
    <div class="col-lg-6 col-md-12">
      <div class="dashboard-list-box margin-top-0">
        <h4 class="gray">Profile Details</h4>
        <div class="dashboard-list-box-static">
          
          <!-- Avatar -->
          <div class="edit-profile-photo">
            <img v-if="userDetail.avatar" ref="avatar" :src="userDetail.avatar" alt="">
            <img v-else ref="avatar" src="images/user-avatar.jpg" alt="">
            <div class="change-photo-btn">
              <div class="photoUpload">
                  <span><i class="fa fa-upload"></i> Upload Photo</span>
                  <input type="file" class="upload" accept="image/png, image/jpeg" @change="handleUploadImage"/>
              </div>
            </div>
          </div>
  
          <!-- Details -->
          <div class="my-profile">
  
            <label>Your Name</label>
            <input v-model="userDetail.fullName" type="text">
  
            <label>Phone</label>
            <input v-model="userDetail.phoneNumber" type="text">
  
            <label>Email</label>
            <input v-model="userDetail.email" type="text" disabled>
  
            <label>Notes</label>
            <textarea name="notes" id="notes" cols="30" rows="10" v-model="userDetail.note">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea>
          </div>
  
          <button class="button margin-top-15">Save Changes</button>
  
        </div>
      </div>
    </div>
    
  </form>

  <!-- Change Password -->
  <div class="col-lg-6 col-md-12">
    <div class="dashboard-list-box margin-top-0">
      <h4 class="gray">Change Password</h4>
      <div class="dashboard-list-box-static">

        <!-- Change Password -->
        <div class="my-profile">
          <label class="margin-top-0">Current Password</label>
          <input type="password" v-model="changePassword.currentPassword">

          <label>New Password</label>
          <input type="password" v-model="changePassword.newPassword">

          <label>Confirm New Password</label>
          <input type="password" v-model="changePassword.newPasswordConfirm">

          <button class="button margin-top-15" @click="handleSubmitChangePassword">Change Password</button>
        </div>

      </div>
    </div>
  </div>


  <!-- Copyrights -->
  <div class="col-md-12">
    <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
  </div>

</div>

</div>
<!-- Content / End -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {mapState,mapActions } = createNamespacedHelpers('moduleUser')
export default {
  data(){
    return {
      changePassword:{}
    }
  },

  computed:{
    ...mapState({
      userDetail: state => state.userDetail,
    })
  },

  methods:{
    ...mapActions({
      changePasswordAction: "changePasswordAction",
      changeProfileAction: "changeProfileAction"
    }),

    handleSubmitChangePassword(){
      if (this.changePassword.newPassword !== this.changePassword.newPasswordConfirm){
        alert("Xác nhận mật khẩu mới không khớp")
        return
      }
      this.changePassword.email = this.userDetail.email
      this.changePasswordAction(this.changePassword)
      this.changePassword = {}
    },

    handleUploadImage(event){
      const fileImage = event.target.files[0]
      this.userDetail.fileAvatar = fileImage
      this.$refs.avatar.src = URL.createObjectURL(fileImage)
    },

    handleChangeProfile(){
      const formData = new FormData();
      formData.append("fullName", this.userDetail.fullName);
      formData.append("note", this.userDetail.note);
      formData.append("email", this.userDetail.email);
      formData.append("phoneNumber", this.userDetail.phoneNumber);
      formData.append("fileAvatar", this.userDetail.fileAvatar);
      this.changeProfileAction(formData)

    }
  }
}
</script>

<style scoped>
  #titlebar{
    padding-left: 15px; padding-right: 15px;
  }

  .dashboard-content{
    margin: 0;
  }
</style>