<template>
	<div class="NewsDetail">
		<main-header title="新闻详情" :back="true"></main-header>
		<!--<div class="bg-image" v-if="newsDetail.image">
			<img :src="newsDetail.image | imgUrl">
			<span class="title">{{newsDetail.title}}</span>
		</div>-->
		<vue-better-scroll class=" main-content wrapper" ref="scroll"
			:scrollbar="scrollbarObj" :listenScroll="true" @scroll="scroll">
			<div class="body" v-html="newsDetail.body" :class="newsDetail.css"></div>
		</vue-better-scroll>
	</div>
</template>
<script>
	import mainHeader from '@/components/main-header/main-header'
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'NewsDetail',
		data() {
			return {
				// 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
				scrollbarObj: {
					fade: true
				},
				startY: 0, // 纵轴方向初始化位置
			}
		},
		props: ['id'],
		components: {
			mainHeader
		},
		mounted() {
			this.getNewsDetail(this.id.replace(/^:/, '')).then((res) => {

			});
		},
		computed: {
			...mapState('news', [
				'newsDetail'
			])
		},
		methods: {
			...mapActions('news', [
				'getNewsDetail'
			]),
			scroll(e){
				console.error(e)
			}
		},
	}
</script>

<style lang="scss">
	@import "./NewsDetail.scss";
	@import "../../assets/news_qa.auto.css";
</style>