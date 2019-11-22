

const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default


//const items = itemas

const dynamicPaths  = ['/item/1/','/item/2/','/item/3/','/item/4/','/item/5/','/item/6/','/item/7/','/item/9/','/item/9/','/item/10/']
const staticPaths = ['/', '/about/', ]
const routerPaths = staticPaths.concat(dynamicPaths);


module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: () => {
    return {
        plugins: [
            new PrerenderSPAPlugin({
              staticDir: path.join(__dirname, 'dist'),
              routes: routerPaths
            }),
            new SitemapPlugin('https://misato-vuex-shop.netlify.com', routerPaths, {
              fileName: 'sitemap.xml',
              lastMod: true,
              changeFreq: 'monthly'
            })
        ]
    }
  }
}