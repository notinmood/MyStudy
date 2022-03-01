/**
 * @file   : vue.config.js
 * @time   : 9:30
 * @date   : 2022/3/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

module.exports = {
    // +--------------------------------------------------------------------------
    // |::说明·| 基本路径。用以解决打包后页面显示为空的情形。
    // |::一一·| 因为缺省情形下，主页 index.html 加载 css、JavaScript 等资源的时候
    // |::一一·|      查找的目录是 “/css” 和 “/js”。现在改成 “./css” 和 “./js”
    // |::一一·|
    // |::一一·| 参考 https://blog.csdn.net/qq_39051175/article/details/99677902
    // +--------------------------------------------------------------------------
    publicPath: './',
}
