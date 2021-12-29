const path = require("path");
const webpack = require("webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static'
        }),
        new WebpackPwaManifest({
          name: "Food Event",
          short_name: "Foodies",
          description: "An app that allows you to view upcoming food events.",
          start_url: "../index.html",
          background_color: "#01579b",
          theme_color: "#ffffff",
          fingerprints: false,
          inject: false,
          icons: [{
            src: path.resolve("assets/img/icons/icon-512x512.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons")
          }]
        })
    ],
    mode: 'development',
    devServer: {
      static: {
        directory: __dirname
      },
      port: 8080
    }
};