var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
module.exports={
    entry:{
       bundle:'./main.js'
    },
    output:{
        path:__dirname+'../dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/, 
                use:'babel-loader'
            },
            {
                test:/\.(ttf|woff|svg|eot|jpg|png|gif)$/,
                use:'file-loader'
            }
        ]
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    devtool:'eval-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"../index.html")
        }),
        new ExtractTextPlugin('style.css'),
        new UglifyJSPlugin(),
        new CleanPlugin(path.resolve(__dirname,'../dist'))
    ] 
}