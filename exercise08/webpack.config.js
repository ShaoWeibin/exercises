module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',  // 本地服务器加载页面所在目录
        inline: true  // 实时刷新
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
}
