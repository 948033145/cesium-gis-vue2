// const { defineConfig } = require('@vue/cli-service')
// const CopywebpackPlugin = require('copy-webpack-plugin');
// const path = require('path')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   configureWebpack: (config) => {    
//     const cesiumSourcePath = 'node_modules/anov-gis-sdk/dist/anov-gis-sdk/';
//     const plugins = [
//       new CopywebpackPlugin({
//         patterns: [
//           {
//             from: path.join(cesiumSourcePath, '/resources'),
//             to: 'anov-gis-sdk/resources',
//           },
//         ]
//       })
//     ]
//     return {
//       plugins: plugins,
//       module: { unknownContextCritical: false }, 
//     }
//   }
// })


const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSourcePath = 'node_modules/anov-gis-sdk/dist/anov-gis-sdk/';
module.exports = {
  configureWebpack: (config) => {
    return {
      plugins: new CopyWebpackPlugin({
        patterns: [{
          from: path.join(cesiumSourcePath, '/resources'),
          to: 'anov-gis-sdk/resources',
        }]
      }),
      // plugins: new CopyWebpackPlugin([
      //   {
      //     from: path.join(cesiumSourcePath, '/resources'),
      //     to: 'anov-gis-sdk/resources',
      //   },
      // ]),
      module: { unknownContextCritical: false },
    }
  }
}