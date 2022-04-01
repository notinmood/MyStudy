import aa from './export_default_01.js'
/**
 * 导入一个通过 export default 暴露的接口的时候，import 后面可以是任何名称的变量信息（可以理解为函数的形参）；
 * 在 export_default_01.js 文件中，本来暴露的时候 default 对象指向的目标为 w 的函数，
 * 此处导入的时候用的变量 aa
 */

console.log(aa(2));