// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('SomeExternalLib')
//       .test(require.resolve('node-modules-dist/path/to/lib.js'))
//       .use('imports-loader')
//       .loader('imports-loader?this=>window,fix=>module.exports=0')

//     config.resolve.alias.set(
//       'paper', 
//       'imports-loader?this=>window,fix=>module.exports=0!node-modules-dist/path/to/lib.js'
//     )
//   }
// }
