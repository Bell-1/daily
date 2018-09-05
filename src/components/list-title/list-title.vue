<template>
	<div class="list-title">{{title}}</div>
</template>

<script>
	export default {
		name: 'list-title',
		props: {
			title: {
				type: String,
				default: '',
				required: true,
			}
		}
	}
</script>

<style>
	@import "./list-title.scss";
</style>