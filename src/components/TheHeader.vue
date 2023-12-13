<template>
  <!-- Header Container
================================================== -->
<header id="header-container" class="fixed fullwidth dashboard">

<!-- Header -->
<div id="header" class="not-sticky">
  <div class="container">
    
    <!-- Left Side Content -->
    <div class="left-side">
      
      <!-- Logo -->
      <div id="logo">
        <router-link to="/home"><img src="images/logo.png" alt=""></router-link>
        <router-link to="/home" class="dashboard-logo"><img src="images/logo2.png" alt=""></router-link>
      </div>

      <!-- Mobile Navigation -->
      <div class="mmenu-trigger">
        <button class="hamburger hamburger--collapse" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <div class="clearfix"></div>
      <!-- Main Navigation / End -->
      
    </div>
    <!-- Left Side Content / End -->

   <!-- Right Side Content / End -->
   <div class="right-side">
      <!-- Header Widget -->
      <div class="header-widget">
        <user-infomation></user-infomation>
      </div>
      <!-- Header Widget / End -->
    </div>
    <!-- Right Side Content / End -->

  </div>
</div>
<!-- Header / End -->

</header>
<div class="clearfix"></div>
<!-- Header Container / End -->
</template>

<script>
import UserInfomation from './UserInfomation.vue'
export default {
  components: { UserInfomation },
}
</script>

<style>

</style>