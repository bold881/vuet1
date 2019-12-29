module.exports = {
    pages: {
        index: {
          entry: './src/pages/index/index.js',
          template: './src/pages/index/index.html',
          filename: 'index.html',
          title: '首页'
        }
    },
    devServer: {
      host: '0.0.0.0',
      port: 9000
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/ireport/dist/': '/'
}
