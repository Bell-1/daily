<template>
	<div class="header">
		<div class="menu-icon" @click="toggleSide">
			<i class="fa" v-bind:class="[back ? 'fa-chevron-left' : 'fa-reorder']"></i>
		</div>
		<div class="title">{{title}}</div>
	</div>
</template>

<script>
	export default {
		name: 'main-header',
		data() {
			return {

			}
		},
		props: {
			title: {
				type: String,
				required: true,
				default: '首页',
			},
			back: {
				type: Boolean,
				default: false,
				required: false,
			}
		},

		methods: {
			toggleSide() {
				if(this.back){
					this.$router.back();
				}else {
					this.$emit('toggleSide');
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "./main-header";
</style>