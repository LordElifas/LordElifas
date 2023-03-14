/* eslint @typescript-eslint/no-var-requires: "off" */

const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const common = require('./webpack.common.js');
const config = require('../src/config.js');

const fileName = `${config.RELEASE_DATE}__[name].[contenthash]`;

module.exports = merge(common, {
    mode: 'production',
    devServer: {
        static: './build',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                },
            }),
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: `${fileName}.css`,
            chunkFilename: `${fileName}.css`,
        }),
        new Dotenv({
            path: path.resolve(__dirname, '..', '.env.prod'),
        }),
    ],

    output: {
        filename: `${fileName}.js`,
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
});
