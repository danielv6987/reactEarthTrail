const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({
        path: '.env.test'
    });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({
        path: '.env.development'
    });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    const CSSExtract = new ExtractTextPlugin('main.css');

    return [{
        target: 'web',
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
                {
                    test: [/\.s?css$/, /\.sass$/],
                    use: CSSExtract.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.GMAP_CLIENT_KEY': JSON.stringify("AIzaSyBWjFwolYyrSNinFxwn2kDNlI7pId0aiVA")
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }];

};