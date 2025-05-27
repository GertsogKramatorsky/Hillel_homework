const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/script.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.bundle.js",
    },
    mode: "development",
    devServer: {
        static: path.resolve(__dirname, "build"),
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        targets: "defaults",
                        presets: [["@babel/preset-env"]],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: "style-loader",
                        options: {
                            injectType: "styleTag",
                        },
                    },
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\\.(png|jpe?g|gif|svg)$/,  // Збірка для зображень
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                    }
                },
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
};
