module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/DestinyChild/api': ''
        }
      }
    },
    watchOptions: {
      ignored: []
    }
  },

  baseUrl: '/DestinyChild',
  publicPath: '/DestinyChild'
}
