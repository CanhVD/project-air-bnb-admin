<template>
   <div class="dashboard-content">
    <div
    class="
      mfp-wrap mfp-close-btn-in mfp-auto-cursor
      my-mfp-zoom-in
      mfp-ready
      my-bg 
    "
    tabindex="-1"
    style="background-image: url(images/bg-login.jpeg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign In</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Login -->
              <div class="tab-content" id="tab1" style="">
                <form @submit.prevent="handleSubmit" class="login">
                  <p class="form-row form-row-wide">
                    <label for="email"
                      >Email:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email"
                        v-model="userLogin.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password"
                        id="password"
                        v-model="userLogin.password"
                      />
                    </label>
                    <span class="lost_password">
                      <a href="#">Lost Your Password?</a>
                    </span>
                  </p>

                  <div class="form-row">
                    <input
                      type="submit"
                      class="button border margin-top-5"
                      name="login"
                      value="Login"
                    />
                    <div class="checkboxes margin-top-10">
                      <input id="remember-me" type="checkbox" name="check" />
                      <label for="remember-me">Remember Me</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close" @click="handleGoBack"></button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import router from '@/router'
const {mapState,mapActions } = createNamespacedHelpers('moduleUser')
export default {
    data() {
      return {
        userLogin: {},
      }
    },
    methods:{
      ...mapActions({
        postUserLoginAction: 'postUserLoginAction'
      }),

      handleSubmit(){
          this.postUserLoginAction({userLogin:this.userLogin, router})
      },
      
      handleGoBack(){
        router.go(-1)
      }
    },

}
</script>

<style lang="scss" scoped>
.my-bg {
  background-size: cover;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  z-index: 9999;
}

.dashboard-content{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  z-index: 9999;
}
</style>