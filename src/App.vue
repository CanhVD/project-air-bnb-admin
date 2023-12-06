<template>
  <the-header></the-header>
   <div id="dashboard">
     <the-side-bar></the-side-bar>
      <div class="dashboard-content">
        <router-view></router-view>
      </div>
      <!-- Content / End -->
    </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheSideBar from "./components/TheSideBar.vue";
export default {
name: "App",
  components: {
    TheHeader,
    TheSideBar
  }
}
</script>