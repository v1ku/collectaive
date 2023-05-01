module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'templates/index.html',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js'
      }
    },
    entry: './src/main.js',
    output: {
      filename: 'static/js/[name]-[chunkhash].js',
      chunkFilename: 'static/js/[name]-[chunkhash].js',
    },
  }
};
