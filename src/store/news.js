import http from "@/http.js"
let news = {
	namespaced: true,
	state: {
		hotList: [],
		top_stories: [], //首页轮播图
		stories: [], //今日新闻
		newsDetail: {}, //新闻详情
		themes: {}, //主题新闻
		news: {
			list: [],
			page: 1,
			length: 10,
			last: 1,
		},
	},
	mutations: {
		setLatest(state, data) {
			for (let v of data.stories) {
				state.stories.push(v);
			}
			state.top_stories = data.top_stories;
		},
		setHotList(state, data) {
			state.hotList = data;
		},
		setNewsDetail(state, data) {
			let topImg = `<div class="img-place-holder"><div class="bg-image" v-if="newsDetail.image">
			<img src="${data.image}">
			<span class="title">${data.title}</span>
		</div>`
			data.body = data.body.replace(/<div class="img-place-holder">/, topImg)
			data.body = data.body.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
			state.newsDetail = data;
		},
		setThemes(state, data) {
			state.themes = data;
		},
	},
	actions: {
		getLatest({ commit }) {
			return new Promise((resolve, reject) => {
				http.request('rb_latest').then((res) => {
					commit('setLatest', res);
					resolve();
				}).catch(() => {
					reject()
				})
			})
		},
		getHotList({ commit }, dataToSend = {}) {
			return new Promise(function(resolve, reject) {
				http.request("rb_hot", dataToSend).then(function(res) {
					if (res.recent) {
						commit('setHotList', res.recent)
					}
					resolve();
				}).catch(function(data) {
					reject();
				})
			})
		},
		getNewsDetail({ commit }, param = '') {
			return new Promise(function(resolve, reject) {
				http.request("rb_news_detail", {}, '/' + param).then(function(res) {
					commit('setNewsDetail', res)
					resolve();
				}).catch(function(data) {
					reject();
				})
			})
		},
		getThemes({ commit }) {
			http.request('rb_themes_detail').then((res) => {
				commit('setThemes', res);
			});
		},
	},

}

export default news;