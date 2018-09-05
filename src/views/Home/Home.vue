<template>
	<div class="Home">
		<main-header @toggleSide="toggleSide()" title="首页"></main-header>
		<vue-better-scroll class=" main-content wrapper" ref="scroll" :scrollbar="scrollbarObj"
		 :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)"
		 @pullingDown="onPullingDown" @pullingUp="onPullingUp">
			<swiper class="swiper" :options="swiperOption" ref="mainSwiper">
				<!-- slides -->
				<swiper-slide v-for="item in top_stories">
					<div class="slide-item">
						<div class="img">
							<img :src="item.image | imgUrl" alt="" />
						</div>
						<div class="title">{{item.title}}</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<listTitle title="今日新闻"></listTitle>
			<div class="list">
				<div class="list-item" @click="viewDetail(item.id)" v-for="(item, index) in stories">
					<div class="left">{{item.title}}</div>
					<div class="right">
						<img :src="item.images[0] | imgUrl" alt="" />
					</div>
				</div>
			</div>
		</vue-better-scroll>
	</div>
</template>

<script>
	import mainHeader from '@/components/main-header/main-header'
	import listTitle from '@/components/list-title/list-title'
	import { mapState, mapMutations, mapActions } from 'vuex'
	export default {
		name: 'home',
		data() {
			return {
				// 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
				scrollbarObj: {
					fade: true
				},
				// 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
				pullDownRefreshObj: {
					threshold: 90,
					stop: 40
				},
				// 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
				pullUpLoadObj: {
					threshold: 0,
					txt: {
						more: '加载更多',
						noMore: '没有更多数据了'
					}
				},
				startY: 0, // 纵轴方向初始化位置
				scrollToX: 0,
				scrollToY: 0,
				scrollToTime: 700,
				items: [],
				count: 0,
				imgPrefix: 'https://images.weserv.nl/?url=',
				swiperOption: {
					notNextTick: true,
					//					autoplay: {
					//						delay: 300,
					//						stopOnLastSlide: false,
					//						disableOnInteraction: true,
					//					},
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
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		components: {
			mainHeader,
			listTitle,
		},
		mounted() {
			this.onPullingDown();
			this.getThemes();
			//			this.getLatest();
			//			this.getHotList();
		},
		computed: {
			...mapState('news', [
				'hotList',
				'stories',
				'top_stories',
			])
		},
		methods: {
			...mapActions('news', [
				'getLatest',
				'getHotList',
				'getThemes',
			]),
			...mapMutations([
				'toggleSide',
			]),
			viewDetail(id) {
				this.$router.push('/NewsDetail/' + id);
			},
			// 滚动到页面顶部
			scrollTo() {
				this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
			},
			// 模拟数据请求
			getData() {
				return new Promise(resolve => {})
			},
			onPullingDown() {
				// 模拟下拉刷新
				console.log('下拉刷新')
				this.getLatest().then(() => {
					this.$refs.scroll.forceUpdate(true)
				}).catch(() => {
					this.$refs.scroll.forceUpdate(true)
				});
			},
			onPullingUp() {
				// 模拟上拉 加载更多数据
				console.log('上拉加载')
				this.getLatest().then(() => {
					this.$refs.scroll.forceUpdate(true)
				}).catch(() => {
					this.$refs.scroll.forceUpdate(true)
				});
			},
		}
	}
</script>

<style lang="scss" type="text/css">
	@import "./Home.scss";
	.main-content {
		height: 100vh;
	}
</style>