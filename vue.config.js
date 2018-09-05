module.exports = {
	baseUrl: './',
	outputDir: '../wwwroot/ribao',
	assetsDir: 'static',
	runtimeCompiler: undefined,
	productionSourceMap: undefined,
	parallel: undefined,
	css: undefined,
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
	},
}