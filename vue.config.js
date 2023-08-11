const { defineConfig } = require('@vue/cli-service')
const CopywebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const cesiumSourcePath = 'node_modules/@anov/gis/dist';
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    return {
      plugins: [
        new CopywebpackPlugin({
          patterns: [
            {
              from: path.join(cesiumSourcePath, '/resources'),
              to: 'anov-gis-sdk/resources',
            },
          ]
        })
      ],
      module: { unknownContextCritical: false },
    }
  }
})
