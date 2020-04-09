const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: [
        './index.js',
        './styles/style.scss'
        ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
};