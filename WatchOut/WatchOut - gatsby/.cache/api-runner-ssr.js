var plugins = [{
      plugin: require('C:/Users/drago/Documents/opet_sucelja/HCI-2018-19/bits-of-gatsby/creating-responsive-menu/hello-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/drago/Documents/opet_sucelja/HCI-2018-19/bits-of-gatsby/creating-responsive-menu/hello-blog/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"C:\\Users\\drago\\Documents\\opet_sucelja\\HCI-2018-19\\bits-of-gatsby\\creating-responsive-menu\\hello-blog\\src\\components\\Layout\\index.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
