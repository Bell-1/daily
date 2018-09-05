<template>
	<swiper :options="swiperOption" ref="mainSwiper">
		<!-- slides -->
		<swiper-slide>I'm Slide 1</swiper-slide>
		<swiper-slide>I'm Slide 2</swiper-slide>
		<swiper-slide>I'm Slide 3</swiper-slide>
		<swiper-slide>I'm Slide 4</swiper-slide>
		<swiper-slide>I'm Slide 5</swiper-slide>
		<swiper-slide>I'm Slide 6</swiper-slide>
		<swiper-slide>I'm Slide 7</swiper-slide>
		<!-- Optional controls -->
		<!--<div class="swiper-pagination" slot="pagination"></div>//
		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
		<div class="swiper-scrollbar" slot="scrollbar"></div>-->
	</swiper>
</template>

<script>
	export default {
		name: 'main-swiper',
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					direction: 'horizontal',
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					prevButton: '.swiper-button-prev', //上一张
					nextButton: '.swiper-button-next', //下一张
					scrollbar: '.swiper-scrollbar', //滚动条
					mousewheelControl: true,
					observeParents: true,
					debugger: true,
				}
			}
		}
	}
</script>

<style>

</style>