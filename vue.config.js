const { defineConfig } = require('@vue/cli-service')
const CopywebpackPlugin = require('copy-webpack-plugin');
const cesiumSourcePath = 'node_modules/@anov/gis/dist/resources';
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    return {
      plugins: [
        new CopywebpackPlugin({
          patterns: [
            {
              from: cesiumSourcePath,
              to: 'anov-gis-sdk/resources',
            },
          ]
        })
      ],
      module: { unknownContextCritical: false },
    }
  }
})
