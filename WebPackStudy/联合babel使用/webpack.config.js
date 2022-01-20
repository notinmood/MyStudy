const path = require('path');

module.exports = {
    mode: "development", //"production"
    entry: {
        index: "./index.js"
    },
    output: {
        filename: "[name].bundle.js", // 输出 index.js 和 utils.js
        path: path.resolve(__dirname, 'dist'), // 打包生成的文件夹
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
            },
            {
                test: /\.(jsx|js)$/,
                use: 'babel-loader'
            },
        ]
    },
}
