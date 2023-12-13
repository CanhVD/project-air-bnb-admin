<template>
  <the-header></the-header>
   <div id="dashboard">
     <the-side-bar></the-side-bar>
      
        <router-view></router-view>
      
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