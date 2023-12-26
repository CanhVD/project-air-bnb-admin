<template>
  <div id="add-listing">

<!-- Section -->
<div class="add-listing-section">

  <!-- Headline -->
  <div class="add-listing-headline">
    <h3><i class="sl sl-icon-doc"></i>Thông tin cơ bản</h3>
  </div>

  <!-- Title -->
  <div class="row with-forms">
    <div class="col-md-4">
      <h5>Tên phòng</h5>
      <input class="search-field" type="text" v-model="roomDetail.roomName"/>
    </div>
    <div class="col-md-4">
      <h5>Giá/ngày($)</h5>
      <input class="search-field" type="text" v-model="roomDetail.price"/>
    </div>
    <div class="col-md-4">
      <h5>Tag</h5>
      <select class="chosen-select-no-single" v-model="roomDetail.tag">
        <option label="-----Chọn Tag-----"></option>	
        <option>Event</option>
        <option>New</option>
        <option>Sale</option>
      </select>
    </div>
  </div>
  <!-- Row -->
  <div class="row with-forms">
    <div class="col-md-4">
      <h5>SL giường</h5>
      <input class="search-field" type="number" min="0" v-model="roomDetail.bed"/>
    </div>
    <div class="col-md-4">
      <h5>SL phòng ngủ</h5>
      <input class="search-field" type="number" min="0" v-model="roomDetail.bedroom"/>
    </div>
    <div class="col-md-4">
      <h5>SL phòng tắm</h5>
      <input class="search-field" type="number" min="0" v-model="roomDetail.bath"/>
    </div>
  </div>
  <!-- Row / End -->

</div>
<!-- Section / End -->

<!-- Section -->
<div class="add-listing-section margin-top-45">

  <!-- Headline -->
  <div class="add-listing-headline">
    <h3><i class="sl sl-icon-location"></i> Địa điểm</h3>
  </div>

  <div class="submit-section">

    <!-- Row -->
    <div class="row with-forms">

      <!-- City -->
      <div class="col-md-6">
        <h5>Tỉnh</h5>
        <select class="chosen-select-no-single" v-model="locationName" @change="handleChangeLocation(locationName, null, null)">
          <option label="-----Chọn tỉnh-----">Select City</option>	
          <option v-for="(local, index) in listLocation" :key="index">{{local.locationName}}</option>
        </select>
      </div>

      <!-- Address -->
      <div class="col-md-6">
        <h5>Quận/Huyện</h5>
        <select class="chosen-select-no-single" v-model="district" @change="handleChangeLocation(null, district, null)">
          <option label="-----Chọn huyện-----">Chọn huyện</option>	
          <option v-for="(local, index) in listLocation" :key="index">{{local.district}}</option>
          
        </select>
      </div>

      <!-- Zip-Code -->
      <div class="col-md-6">
        <h5>Quốc Gia</h5>
        <select class="chosen-select-no-single" v-model="country" @change="handleChangeLocation(null, null, country)">
          <option label="-----Chọn quốc gia-----">Chọn quốc gia</option>	
          <option v-for="(local, index) in listLocation" :key="index">{{local.country}}</option>
        </select>
      </div>
    </div>
    <!-- Row / End -->

  </div>
</div>
<!-- Section / End -->


<!-- Section -->
    <div class="add-listing-section margin-top-45">

<!-- Headline -->
<div class="add-listing-headline">
  <h3><i class="sl sl-icon-picture"></i> Gallery</h3>
</div>

<!-- Dropzone -->
<div class="submit-section">
  <form action="/file-upload" class="dropzone" >
    <div class="dz-default dz-message"><label for="fileImageRoom"><span><i class="sl sl-icon-plus"></i> Click here or drop files to upload</span></label></div>
    <input type="file" id="fileImageRoom" accept="image/png, image/jpeg" hidden />
  </form>
</div>

</div>
<!-- Section / End -->


<!-- Section -->
<div class="add-listing-section margin-top-45">

  <!-- Headline -->
  <div class="add-listing-headline">
    <h3><i class="sl sl-icon-docs"></i> Chi tiết</h3>
  </div>

  <!-- Description -->
  <div class="form">
    <h5>Mô tả</h5>
    <textarea class="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
  </div>

  <!-- Row -->
  <div class="row with-forms">

    <!-- Phone -->
    <div class="col-md-4">
      <h5>Điện thoại <span>(optional)</span></h5>
      <input type="text">
    </div>

    <!-- Website -->
    <div class="col-md-4">
      <h5>Website <span>(optional)</span></h5>
      <input type="text">
    </div>

    <!-- Email Address -->
    <div class="col-md-4">
      <h5>E-mail <span>(optional)</span></h5>
      <input type="text">
    </div>

  </div>
  <!-- Row / End -->


  <!-- Row -->
  <div class="row with-forms">

    <!-- Phone -->
    <div class="col-md-4">
      <h5 class="fb-input"><i class="fa fa-facebook-square"></i> Facebook <span>(optional)</span></h5>
      <input type="text" placeholder="https://www.facebook.com/">
    </div>

    <!-- Website -->
    <div class="col-md-4">
      <h5 class="twitter-input"><i class="fa fa-twitter"></i> Twitter <span>(optional)</span></h5>
      <input type="text" placeholder="https://www.twitter.com/">
    </div>

    <!-- Email Address -->
    <div class="col-md-4">
      <h5 class="gplus-input"><i class="fa fa-google-plus"></i> Google Plus <span>(optional)</span></h5>
      <input type="text" placeholder="https://plus.google.com">
    </div>

  </div>
  <!-- Row / End -->


  <!-- Checkboxes -->
  <h5 class="margin-top-30 margin-bottom-10">Tiện nghi <span>(optional)</span></h5>
  <div class="checkboxes in-row margin-bottom-20">

    <input id="check-a" type="checkbox" name="check">
    <label for="check-a">Thang máy</label>

    <input id="check-b" type="checkbox" name="check">
    <label for="check-b">Không gian thân thiện</label>

   

    <input id="check-d" type="checkbox" name="check">
    <label for="check-d">Mạng không dây</label>

    <input id="check-e" type="checkbox" name="check" >
    <label for="check-e">Bãi đậu xe</label>

    <input id="check-h" type="checkbox" name="check">
    <label for="check-h">Cho phép thú cưng</label>

    <input id="check-c" type="checkbox" name="check">
    <label for="check-c">Bể bơi</label>
    <input id="check-f" type="checkbox" name="check">
    <label for="check-f">Sân gold</label>

  </div>
  <!-- Checkboxes / End -->

</div>
<!-- Section / End -->

<button class="button preview" >Thêm mới <i class="fa fa-arrow-circle-right"></i></button>

</div>
</template>

<script>
import { createNamespacedHelpers} from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('moduleLocation')
export default {
  props:{
    roomDetail:{
      type: Object,
      require: false
    }
  },

  data(){
    return{
      locationName: '',
      district:'',
      country:'',
    }
  },

  async created(){
    await this.getLocationsAction()
    await this.handleChangeLocation()
  },

  watch:{
    roomDetail(newValue){
      if (newValue.location){
        this.locationName = newValue.location.locationName
        this.district = newValue.location.district
        this.country = newValue.location.country
      }
    },
  },

  computed:{
    ...mapGetters({
      listLocation: 'getLocationGetter',
    }),
  },

  methods:{
    ...mapActions({
      getLocationsAction: 'getLocationsAction',
      handleChangeLocalAction: 'handleChangeLocalAction'
    }),

    handleChangeLocation(locationName, district, country){
      this.handleChangeLocalAction({locationName, district, country})
    },

    handleSubmit(){
      
    }
  }
}
</script>

<style scoped>

.dropzone:hover span{
  color: #59b02c;
}
</style>