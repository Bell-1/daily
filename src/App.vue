<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view class="router" />
		</transition>
		<side-bar :show="sideShow"></side-bar>
	</div>
</template>

<script>
	import sideBar from '@/components/side-bar/side-bar'

	export default {
		name: 'App',
		components: {
			sideBar
		},
		data() {
			return {
				sideShow: false,
				transitionName: 'slide-left'
			}
		},
		create(){
			this.$router.push('Home')
		},
		methods: {},
		watch: {
			'$route' (to, from) {
				console.error('from', from)
				console.error('to', to)
				if (to.path == '#/') {
					this.transitionName = 'slide-right';
				} else {
					this.transitionName = 'slide-left';
				}
			}
		}

	}
</script>

<style lang="scss">
	@import "assets/scss/global.scss";
</style>