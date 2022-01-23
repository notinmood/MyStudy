module.exports = {
    mode: 'production', //production/development
    //入口文件
    entry: {
        index: "./index.js",
        main: "./main.js",
        misc: "./misc.js",
    },
    output: {
        //编译之后的文件放到当前目录并且命名为bundle.js
        path: __dirname,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                },
            }]
    }
}