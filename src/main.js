import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filter.js'
import './registerServiceWorker'
import VueBetterScroll from 'vue2-better-scroll'
import vueAwesomeSwiper from "vue-awesome-swiper"

import './assets/htmlReset/reset.css'
import './assets/htmlReset/reset.js'
import 'font-awesome/css/font-awesome.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false

Vue.use(VueBetterScroll);
Vue.use(vueAwesomeSwiper);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')