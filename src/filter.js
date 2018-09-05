import Vue from 'vue'
Vue.filter('imgUrl', function(value) {
	if (!value) return '';
	return value.replace(/http\w{0,1}:\/\//, 'https://images.weserv.nl/?url=');
})