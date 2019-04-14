const withTypescript = require('@zeit/next-typescript')

const nextConfig = {
  distDir: '../../.next', // relative to `pages` dir, see scripts in package.json
}

module.exports = withTypescript(nextConfig)