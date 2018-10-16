const webpackMerge = require('webpack-merge');
const common = require('../webpack/webpack.common');
const devConfig = require('../webpack/webpack.dev.js');

module.exports = webpackMerge(common, devConfig);