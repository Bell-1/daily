import axios from "axios"

class Http {
	constructor() {
		this.api = {
			//热门消息
			'rb_hot': this.genApi('get', '/api/3/news/hot', '/rb'),
			//主题日报列表查看
			'rb_themes': this.genApi('get', 'api/4/themes', '/rb'),
			'rb_latest': this.genApi('get', '/api/4/news/latest', '/rb'),
			'rb_before': this.genApi('get', 'api/4/news/before', '/rb'),
			'rb_news_detail': this.genApi('get', 'api/4/news', '/rb'),
			'rb_themes_detail': this.genApi('get', '/api/4/themes', '/rb'),
		};
	}

	genApi(method, url, baseUrl = '/api') {
		return {
			method: method.toUpperCase(),
			url,
			baseUrl,
		}
	}

	getApi(apiName) {
		if (apiName && this.api[apiName]) {
			return this.api[apiName]
		} else {
			return false
		}
	}

	initApi() {
		this.api
	}

	request(apiName, dataToSend = {}, param = '') {
		let api = this.getApi(apiName);
		return new Promise((resolve, reject) => {
			if (api) {
				axios.request({
					url: api.url + param,
					method: api.method,
					baseURL: window.location.hostname === 'localhost' && window.location.port !== '' ? api.baseUrl : window.location.origin + '/serve',
					data: dataToSend,
				}).then((res) => {
					if(res.data){
						resolve(res.data);
					}
				}).catch((res) => {
					console.error('error_apiName:' + apiName)
					console.error('error_res:' + res)
					reject();
				})
			} else {
				reject();
				console.error('apiName:' + apiName + ' not found')
			}
		})
	}
}

export default new Http();