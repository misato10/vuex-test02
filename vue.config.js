

const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

//const items = itemas

const dynamicRoutes  = ['/item/1','/item/2','/item/3','/item/4']
const staticRoutes = ['/', '/about', ]
const allRoutes = staticRoutes.concat(dynamicRoutes);

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: () => {
    return {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                routes: allRoutes
            })
        ]
    }
  }
}