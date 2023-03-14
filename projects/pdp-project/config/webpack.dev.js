/* eslint @typescript-eslint/no-var-requires: "off" */

const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const NotifierPlugin = require('@soda/friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const common = require('./webpack.common.js');

const randomPort = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};
module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: randomPort(8000, 9000),
        http2: false,
        historyApiFallback: true,
        client: {
            overlay: false,
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            ignoreOrder: true,
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ESLintPlugin({
            context: './src',
            extensions: ['js', 'jsx', '.ts', '.tsx'],
            emitError: true,
            fix: true,
        }),
        new NotifierPlugin({
            onErrors: (severity, errors) => {
                if (severity !== 'error') {
                    return;
                }
                const msg = `Failed to compile with ${errors.length} errors `;
                const error = errors[0];

                notifier.notify({
                    title: 'Webpack error',
                    message: severity + ': ' + error.name,
                    subtitle: msg,
                    icon: path.join(__dirname, '/favicon.png'),
                });
            },
        }),
    ],

    resolve: {
        modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
        extensions: ['.jsx', '.tsx', '.ts', '.js'],
        alias: {
            react: path.resolve('./node_modules/react'),
        },
    },
});
