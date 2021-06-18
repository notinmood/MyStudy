import aa from './export_default_01.js'
/**
 * 导入一个通过export default暴露的接口的时候，import后面可以是任何名称的变量信息
 * （可以理解为函数的形参）；
 * 在export_default_01.js文件中，本来暴露的时候default对象指向的目标为w的函数，
 * 此处导入的时候用的变量aa
 */

console.log(aa(2));