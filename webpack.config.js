const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
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
        stats: 'errors-only',
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Calculator',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/assets/index.html'
    }),
    new ExtractTextPlugin({
        filename: 'css/styles.css',
        allChunks: true
    })
    ]
}