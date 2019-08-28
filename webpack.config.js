const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, "/src/index.tsx")
    },
    mode: "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    optimization: {
        namedModules: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    devServer: {
        host: "0.0.0.0",
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},

                    {
                        loader: "css-loader",
                        options: {
                            localsConvention: "camelCase",
                            modules: {
                                localIdentName: "[name]-[hash:base64:8]"
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            favicon: "./src/favicon.png",
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};
