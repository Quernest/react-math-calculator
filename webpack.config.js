const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const isProd = process.argv.indexOf('-p') !== -1;
let cssDev = ['style-loader', 'css-loader', 'sass-loader'];
let cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '../'
})
let cssConfig = isProd ? cssProd : cssDev;


module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: cssConfig
            },
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                'file-loader?name=img/[name].[ext]',
                'image-webpack-loader?progressive=true&optimizationLevel=7&interlaced=true'
                ]
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        hot: true,
        stats: 'errors-only',
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Document',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/assets/index.html'
    }),
    new ExtractTextPlugin({
        filename: 'css/styles.css',
        disable: !isProd,
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    ]
}