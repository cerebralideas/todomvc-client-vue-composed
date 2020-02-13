const path = require('path');
const { exec } = require('child_process');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        mock: './mock.server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public/mock'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.bundle.css'
        }),
        new VueLoaderPlugin(),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
                    exec('cp public/mock/app.bundle.js public/live/');
                    exec('cp public/mock/styles.bundle.css public/live/');
                });
            }
        }
    ],
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    }
};
