<template>
  	<!-- Content
	================================================== -->
	<div class="dashboard-content">

<!-- Titlebar -->
<div id="titlebar">
  <div class="row">
    <div class="col-md-12">
      <h2>{{titlePage}}</h2>
      <!-- Breadcrumbs -->
      <nav id="breadcrumbs">
        <ul>
          <li><a href="#">Tổng quan</a></li>
          <li><a href="#">Quản lý phòng</a></li>
          <li>{{titlePage}}</li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-lg-12">

    <form-room :roomDetail="roomDetail"/>
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
import FormRoom from '@/components/FormRoom.vue'
import { createNamespacedHelpers } from 'vuex'
const {mapState,mapActions, mapGetters } = createNamespacedHelpers('moduleRoom')
const {mapActions:mapActionsLocation} = createNamespacedHelpers('moduleLocation')
export default {
  components: { FormRoom },
  data(){
    return{
      roomId: null,
      roomDetail: {},
      titlePage: ''
    }
  },

  async created(){
    this.roomId = this.$route.params.roomId;
    if (this.roomId){
      this.titlePage = 'Thông tin phòng'
      await this.getRoomByIdAction(this.roomId)
      this.roomDetail = {...this.dataRoom}
      console.log(this.roomDetail)

    }
    else this.roomDetail = {}
    this.getLocationsAction()
  },

  updated(){
    this.roomId = this.$route.params.roomId;
    if (!this.roomId){
      this.titlePage = "Thêm mới phòng"
      this.roomDetail = {}
      this.getLocationsAction()
    } 
  }
,
  methods:{
    ...mapActions({
			getRoomByIdAction: 'getRoomByIdAction',
		}),

    ...mapActionsLocation({
      getLocationsAction: 'getLocationsAction',
    })
  },

  computed:{
    ...mapGetters({
      dataRoom: 'dataRoom'
    })
  }
}
</script>

<style scoped>

</style>