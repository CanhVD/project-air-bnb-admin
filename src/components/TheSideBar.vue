<template>
  	<!-- Navigation
	================================================== -->

	<!-- Responsive Navigation Trigger -->
	<a href="#" class="dashboard-responsive-nav-trigger"><i class="fa fa-reorder"></i> Dashboard Navigation</a>

<div class="dashboard-nav">
  <div class="dashboard-nav-inner">

    <ul data-submenu-title="Main">
      <li class="active"><router-link to="/home"><i class="sl sl-icon-settings"></i> Tổng quan</router-link></li>
      <li><a><i class="sl sl-icon-layers"></i>Quản lý phòng</a>
        <ul>
          <li><router-link to="/list-room">Danh sách phòng <span class="nav-tag yellow">10</span></router-link></li>
          <li><router-link to="/add-room">Thêm mới phòng </router-link></li>
        </ul>	
      </li>
      <li><a href="dashboard-bookings.html"><i class="fa fa-calendar-check-o"></i> Bookings</a></li>
      <li><a href="dashboard-wallet.html"><i class="sl sl-icon-wallet"></i> Wallet</a></li>
    </ul>
    
    <ul data-submenu-title="Listings">
      <li><a><i class="sl sl-icon-layers"></i> My Listings</a>
        <ul>
          <li><a href="dashboard-my-listings.html">Active <span class="nav-tag green">6</span></a></li>
          <li><a href="dashboard-my-listings.html">Pending <span class="nav-tag yellow">1</span></a></li>
          <li><a href="dashboard-my-listings.html">Expired <span class="nav-tag red">2</span></a></li>
        </ul>	
      </li>
      <li><a href="dashboard-reviews.html"><i class="sl sl-icon-star"></i> Reviews</a></li>
      <li><a href="dashboard-bookmarks.html"><i class="sl sl-icon-heart"></i> Bookmarks</a></li>
      <li><a href="dashboard-add-listing.html"><i class="sl sl-icon-plus"></i> Add Listing</a></li>
    </ul>	

    
  </div>
</div>
<!-- Navigation / End -->
</template>

<script>
export default {

}
</script>

<style>

</style>