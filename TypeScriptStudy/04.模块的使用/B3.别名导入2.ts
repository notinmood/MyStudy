/**
 * @file   : B3.别名导入2.ts
 * @time   : 9:44
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 被使用的模块中，使用别名导出的信息，在本地还可以继续使用其他别名导入
// +--------------------------------------------------------------------------
import {aDifferentName as localName} from "./A3.别名导出";


console.log(localName);

