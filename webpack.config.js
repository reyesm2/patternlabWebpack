const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: [
        './source/js/index.js',
        './source/css/style.scss'
    ],
    output: {
        filename: 'js/bundle.js',
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
                        options: {outputPath: 'css/', 
                        name: 'bundle.min.css'}
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
                files: '**/*.scss'
            }
        )
    ]
}