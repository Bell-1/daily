<template>
	<div class="side-bar">
		<transition name="fold">
			<div class="container" v-show="sideShow">
				<div class="top">
					<div class="user">
						<div class="img">
						</div>
						<div class="name">请登录</div>
					</div>
					<div class="operate">
						<div class="block">
							<i class="fa fa-star"></i>
							<span>我的收藏</span>
						</div>
						<div class="block">
							<i class="fa fa-download"></i>
							<span>我的下载</span>
						</div>
					</div>
				</div>
				<div class="page-title">
					<i class="fa fa-home"></i>
					<span>首页</span>
				</div>
				<vue-better-scroll class="wrapper">
					<div class="themes" :scrollbarObj="scrollbarObj">
						<div class="theme" v-for="item in themes.others">
							<div class="name">
								{{item.name}}
							</div>
							<i class="fa fa-plus"></i>
						</div>
					</div>
				</vue-better-scroll>
			</div>
		</transition>
		<transition name="fade">
			<div class="mask" v-show="sideShow" @click="toggleSide"></div>
		</transition>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'sideBar',
		data() {
			return {
				scrollbarObj: {
					fade: true
				},
			}
		},
		props: {},
		computed: {
			...mapState([
				'sideShow',
			]),
			...mapState('news', [
				'themes'
			]),
		},
		methods: {
			...mapMutations([
				'toggleSide'
			])
		},
	}
</script>

<style lang="scss">
	@import "./side-bar";
</style>