// webpack.config.js
const path = require("path");

module.exports = {
    mode: "development",
    entry:
        {
            index: './验证区/HTML/commonjs/index.js',
            usingES6: './验证区/HTML/es6/usingES6.js'
        },
    output: {
        path: path.join(__dirname, 'out'),  //打包输出的路径
        filename: '[name].bundle.js',              //打包后的名字
        publicPath: "./out/"                //html引用路径，在这里是本地地址。
    }
};
