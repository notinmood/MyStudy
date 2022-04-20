// /*
//  * @Author       : Shandong Xiedali
//  * @Mail         : 9727005@qq.com
//  * @Date         : 2022-04-10 08:03:44
//  * @LastEditors  : Shandong Xiedali
//  * @LastEditTime : 2022-04-11 20:55:09
//  * @FilePath     : 0.functions.ts
//  * @Description  : 
//  * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved. 
//  */
// function combine<T, U>(first: T, second: U): T & U {
//     let result = <T & U>({} as unknown);

//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }

//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }

//     return result;
// }