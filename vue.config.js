module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    public: 'localhost:8080'
  },
  publicPath: 'http://localhost:8080',
  productionSourceMap: true, // NOTE: this is default
  configureWebpack: {
    devtool: 'source-map',
  }
}