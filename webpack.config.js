
const path = require ('path');
const htmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: ['@babel/polyfill','./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename:'js/bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port:9000
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    } 
};