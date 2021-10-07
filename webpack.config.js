const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        bundle: [
            './source/js/vendor/carbon-components.min.js',
            './source/js/index.js',
            './source/css/style.scss'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public/')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'css/',
                            name: 'bundle.css'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new StylelintPlugin(
            {   configFile: '.\stylelintrc.json',
                context: 'source/css', 
                exclude: 'scss/vendor/*.scss',
                files: '**/*.scss'
            }
        ),
        new ESLintPlugin(
            {   
                context: 'source/js',
                exclude: 'vendor/*.js',
                files: '**/*.js'
            }
        ),  
    ]
}