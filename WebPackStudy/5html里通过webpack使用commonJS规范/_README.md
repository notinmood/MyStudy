说明
--
1. 项目来源 https://blog.csdn.net/kingov/article/details/51705571
2. HTML使用第三方类库的时候：
   1. 全部的本地JavaScript代码都写在单独的 .js文件中(假定此名称为index.js)
   2. 在此index.js中先通过import(或者require)引用第三方类库，
   3. 在此index.js中再使用第三方类库内的类型和方法
   4. 通过webpack将index.js文件转换成本地html可以调用的js形式(假定转换后的文件名称为 bundle.js)
   5. 在html页面中，调用bundle.js而不是index.js
>也可以在index.js内将第三方类库暴露的类型或者方法，直接赋值给window对象，
>那么编译后形成的bundle.js嵌入到HTML后，就可以在web页面继续使用这些类型或者方法(参考main.js内的实现)
