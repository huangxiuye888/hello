const vueConfig = {
  // publicPath可以设置项目地址的二级目录为http: localhost:8080/vue/， 其改变的其实是 webpack 配置文件中 output 的 publicPath 项，也可以根据环境配置修改
  // publicPath: 'vue',
  // publicPath: process.env.NODE_ENV === 'production' ?
  //   '/production-sub-path/' : '/vue',
  // 如果你想将构建好的文件打包输出到 output 文件夹下（默认是 dist 文件夹），你可以配置：
  // outputDir: 'output',
  // 该配置项用于设置是否为生产环境构建生成 source map，一般在生产环境下为了快速定位错误信息，我们都会开启 source map：默认值开启状态
  // productionSourceMap: true,
  // chainWebpack 配置项允许我们更细粒度的控制 webpack 的内部配置，其集成的是 webpack-chain 这一插件，该插件可以让我们能够使用链式操作来修改配置，比如：
  // config 参数为已经解析好的 webpack 配置,这里需要注意的是我们使用了 webpack-merge 这一插件，该插件用于做 webpack 配置的合并处理，这样 options 下面的其他值就不会被覆盖或改变。
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //     .use('url-loader')
  //     .tap(options =>
  //       merge(options, {
  //         limit: 5120,
  //       })
  //     )
  // },
  // 以上操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M，修改后的 webpack 配置代码如下
  //   module: {
  //     rules: [
  //         {   
  //             /* config.module.rule('images') */
  //             test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
  //             use: [
  //                 /* config.module.rule('images').use('url-loader') */
  //                 {
  //                     loader: 'url-loader',
  //                     options: {
  //                         limit: 5120,
  //                         name: 'img/[name].[hash:8].[ext]'
  //                     }
  //                 }
  //             ]
  //         }
  //     ]
  // }
  // configureWebpack 来进行修改，两者的不同点在于 chainWebpack 是链式修改，而 configureWebpack 更倾向于整体替换和修改。示例代码如下
  // config 参数为已经解析好的 webpack 配置
  // configureWebpack 可以直接是一个对象，也可以是一个函数，如果是对象它会直接使用 webpack-merge 对其进行合并处理，如果是函数，你可以直接使用其 config 参数来修改 webpack 中的配置，或者返回一个对象来进行 merge 处理。
  // configureWebpack: config => {
  //   // config.plugins = []; // 这样会直接将 plugins 置空
  //   // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
  //   return {
  //     plugins: []
  //   }
  // },
  //   devServer: {
  //     open: true, // 是否自动打开浏览器页面
  //     host: '0.0.0.0', // 指定使用一个 host。默认是 localhost
  //     port: 8080, // 端口地址
  //     https: false, // 使用https提供服务
  //     proxy: null, // string | Object 代理设置

  //     // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
  //     before: app => {
  //       // `app` 是一个 express 实例
  //     }
  // }
  devServer: {
    port: 9027,
    open: true,
    hot: true,
    inline: true,
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9028/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}
module.exports = vueConfig

