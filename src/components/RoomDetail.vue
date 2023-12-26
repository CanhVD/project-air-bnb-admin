<template>
  <div>
		<div class="list-box-listing">
								<div class="list-box-listing-img"><a href="#"><img :src="room.image" :alt="room.roomName"></a></div>
								<div class="list-box-listing-content">
									<div class="inner">
										<h3><a href="#">{{room.roomName}}</a></h3>
										<span>{{ room.location.district }}, {{ room.location.locationName  }}, {{ room.location.country  }}</span>
										<div class="star-rating" data-rating="3.5">
											<div class="rating-counter">({{ room.views }} reviews)</div>
										<span class="star"></span><span class="star"></span><span class="star"></span><span class="star half"></span><span class="star empty"></span></div>
									</div>
								</div>
							</div>
							<div class="buttons-to-right">
								<router-link :to="'/edit-room/' + room.id" class="button gray"><i class="sl sl-icon-note"></i> Chi tiết</router-link>
								<a href="#" class="button gray"><i class="sl sl-icon-close"></i> Khóa</a>
							</div>
	</div>
</template>

<script>
export default {
props:{
  room:{
    Type: Object
  }
}
}
</script>

<style>

</style>