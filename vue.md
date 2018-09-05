
# vue笔记
### 安装Vue CLI 3
>`npm install -g @vue/cli`
### 创建vue项目
>`vue create projectName` 直接创建  
`vue ui` 或者使用GUI图形化界面创建

### 添加插件(用到时)
>   `vue add @vue/eslint`  
`vue add @vue/cli-plugin-eslint`  
`vue add router`  
`vue add vuex`

### 使用工具
1. vue2-better-scroll 区域滚动插件，下拉刷新，上拉加载  
>###### 安装
   `npm install vue2-better-scroll -s`
>###### 使用
  `import VueBetterScroll from 'vue2-better-scroll'`  
  `Vue.use(VueBetterScroll);`  
>###### 文档地址
  https://cnpmjs.org/package/vue2-better-scroll

2. vue-awesome-swiper 轮播图插件
>###### 安装
   `npm install vue2-better-scroll -s`
>###### 使用
  `import vueAwesomeSwiper from "vue-awesome-swiper"`  
  `import 'swiper/dist/css/swiper.css'//需要引入额外的样式`  
  `Vue.use(vueAwesomeSwiper);`   
>###### 文档地址  
  https://www.npmjs.com/package/vue-awesome-swiper
3. font-awesome 字体图标库
>###### 安装
   `npm install vue2-better-scroll -s`
>###### 使用
  `import VueBetterScroll from 'vue2-better-scroll'`  
  `Vue.use(VueBetterScroll);`  
>###### 中文官网
  http://www.fontawesome.com.cn/
4.axios 基于 promise 的 HTTP 库
>###### 安装  
  `npm install axios -s`
>###### 使用  
  `import axios from "axios"`  
>######  vue-cli 3.0 跨域
  项目根目录下创建 'vue-config.js' 文件  
> 
    //asdfa
    module.exports = {
    devServer: {
		// 设置主机地址
		host: 'localhost',
		// 设置默认端口
		port: 8080,
		// 设置代理
		proxy: {
			'/rb': {
				// 目标 API 地址
				target: 'https://news-at.zhihu.com/',
				// 如果要代理 websockets
				//				ws: true,
				// 将主机标头的原点更改为目标URL
				changeOrigin: true,
				pathRewrite: {
					'^/rb': '' //重写接口
				}
			}
		}
	}
}`
>###### 中文说明  
  https://www.kancloud.cn/yunye/axios/234845

>######
>######
>######
>######
>######
