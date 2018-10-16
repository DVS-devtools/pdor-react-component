const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');

module.exports = {
    mode: 'production',
    entry: commonPaths.entryPath,
    output: {
        path: commonPaths.outputPath,
        filename: 'index.js',
        library: 'YourComponent',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, '../node_modules/react'),
            'react-dom': path.resolve(__dirname, '../node_modules/react-dom')
        }
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${commonPaths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',
};