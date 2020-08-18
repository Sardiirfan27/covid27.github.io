const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        index: './src/app.js',
        another: './app1.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: { 
        rules: [
              //untuk mengambil data gambar 
            {
                test: /\.(png|svg|jpg|gif)$/,
                  use: [
                    { 
                        loader: 'file-loader',
                        loader: 'url-loader',
                    },
                       
                ],
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    
                ]
            }, 

        ]
    },

    plugins: [
      new HtmlWebpackPlugin({
          filename: path.resolve(__dirname, 'dist/index.html'),
          template: path.resolve(__dirname, 'src/index.html')
      }),
      new CopyWebpackPlugin([
          {
              from: path.resolve(__dirname, 'src/image'),
              to: path.resolve(__dirname, 'dist/image')
          }
      ])

  ]
}