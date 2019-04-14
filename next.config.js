const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

const nextConfig = {
  distDir: '../../.next', // relative to `pages` dir, see scripts in package.json
  webpack(config, options) {
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin({
        async: false,
        formatter: typescriptFormatter,
        tsconfig: path.resolve('./tsconfig.json'),
        watch: path.resolve('./src'),
      }))
    }

    return config
  }
}

module.exports = withTypescript(nextConfig)