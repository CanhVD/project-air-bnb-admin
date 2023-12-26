<template>
  	<div class="dashboard-content">

<!-- Titlebar -->
<div id="titlebar">
  <div class="row">
    <div class="col-md-12">
      <h2>Danh sách phòng</h2>
      <!-- Breadcrumbs -->
      <nav id="breadcrumbs">
        <ul>
          <li><a href="#">Tổng quan</a></li>
          <li><a href="#">Quản lý phòng</a></li>
          <li>Danh sách phòng</li>
        </ul>
      </nav>
    </div>
  </div>
</div>

<div class="row">
  
  <!-- Listings -->
  <div class="col-lg-12 col-md-12">
    <div class="dashboard-list-box margin-top-0">
      <div class="dashboard-list-box__header">
        <select class="chosen-select-no-single" v-model="isActive" @change="handleGetRooms">
                <option label="-----Chọn trạng thái-----">Chọn trạng thái</option>	
                <option selected :value="true">Hoạt động</option>
                <option :value="false">Không hoạt động</option>
              </select>
        <input type="text" placeholder="Tìm kiếm...">
      </div>
      
      
      <ul>
        <li v-for="(room, index) in listRoom" :key="index">
          <room-detail :room="room" />
        </li>
      </ul>
    </div>
  </div>


  <!-- Copyrights -->
  <div class="col-md-12">
    <div class="copyrights">© 2021 Listeo. All Rights Reserved.</div>
  </div>
</div>

</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import RoomDetail from '../../components/RoomDetail.vue'
import FormRoom from '../../components/FormRoom.vue'
const {mapState,mapActions } = createNamespacedHelpers('moduleRoom')
export default {
  components:{
    RoomDetail,
    FormRoom
},

  data(){
    return{
      isActive: true
    }
  },

  created(){
    this.getRooms()
  },

  computed: {
		...mapState({
			listRoom: state => state.dataRoom,
		}),
	},

  methods: {
		...mapActions({
			getRooms: 'getRoomsAction',
		}),

    handleGetRooms(){
      this.getRooms(this.isActive)
    }
	},
}
</script>

<style scoped lang="scss">
.dashboard-list-box__header{
  display: flex; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #eaeaea; height: 54px;
  select{
    width: 250px; border: none;
  }
  input{
    width: 300px;
    margin: 0;
    padding: 25px;
    border: none;
  }
}
</style>