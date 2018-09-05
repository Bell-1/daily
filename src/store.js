import Vue from 'vue'
import Vuex from 'vuex'
import news from '@/store/news'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		news
	},
	state: {
		sideShow: false,
	},
	mutations: {
		toggleSide(state){
			state.sideShow = !state.sideShow;
		}
	},
	actions: {

	}
})