const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { WatchIgnorePlugin } = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx'],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            appMountId: 'app',
            template: './src/index.html',
            collapseWhitespace: true,
        }),
        new Dotenv({
            path: path.resolve(__dirname, '..', '.env'),
        }),
        new CopyWebpackPlugin({ patterns: [{ from: 'public', to: './' }] }),
        new WatchIgnorePlugin({
            paths: [/\.d\.ts$/],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            reportFiles: ['src/**/*.{ts,tsx}', '!src/skip.ts'],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]-[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[ext]?[hash]',
                            outputPath: 'fonts/',
                            publicPath: (url) => `../fonts/${url}`,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|webp|gif|)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png',
                            outputPath: 'images',
                            limit: 8192,
                            encoding: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
        extensions: ['.jsx', '.tsx', '.ts', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
            }),
        ],
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
            chunks: 'all',
        },
    },
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
};
