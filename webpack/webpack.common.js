const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        popup: path.join(__dirname, srcDir + 'popup.ts'),
        options: path.join(__dirname, srcDir + 'options.ts'),
        background: path.join(__dirname, srcDir + 'background.ts'),
        content_script: path.join(__dirname, srcDir + 'content_script.ts'),
        style: path.join(__dirname,'../' + 'styles/index.scss')
    },
    output: {
        path: path.join(__dirname, '../dist/js')
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        ident: "postcss",
                        syntax: "postcss-scss",
                        plugins: [
                            "postcss-import",
                            "tailwindcss",
                            "autoprefixer"
                        ],
                    },
                },
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin({
            patterns: [{ from: '.', to: '../', context: 'public' }],
            options: {}
        }),
        // Xuất kết quả với CSS - sau khi qua loader MiniCssExtractPlugin.loader
        new MiniCssExtractPlugin(),
    ]
};

