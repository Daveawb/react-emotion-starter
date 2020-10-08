const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

process.env.BABEL_ENV = process.env.BABEL_ENV || 'development';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = function (webpackEnv) {
    const isDev = webpackEnv === 'development';

    return {
        mode: webpackEnv,
        context: __dirname,
        entry: './src/index.tsx',
        output: {
            filename: 'build.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: 'inline-source-map',
        devServer: {
            port: 3000,
            contentBase: path.join(__dirname, 'dist'),
            publicPath: '/',
            overlay: false,
            historyApiFallback: {
                disableDotRule: true,
            },
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.module.s([ac])ss$/,
                    loader: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: isDev,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev,
                            },
                        },
                    ],
                },
                {
                    test: /\.s([ac])ss$/,
                    exclude: /\.module.(s([ac])ss)$/,
                    loader: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                templateParameters: {},
            }),
            new MiniCssExtractPlugin({
                filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css',
                chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[hash]].css',
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['css/*.*', '*.js', '*.html'],
            }),
        ],
    };
};
