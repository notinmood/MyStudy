<?php
// /**
//  * @file   : myfunctions.php
//  * @time   : 12:24
//  * @date   : 2021/9/8
//  * @emailto: 9727005@qq.com
//  * @creator: ShanDong Xiedali
//  * @company: HiLand & RainyTop
//  */
//
// if (!function_exists("nonNull")) {
//     function nonNull($value, callable  $nonNullCallback, callable  $nullCallback = null)
//     {
//         if (is_null($value) ) {
//             if($nullCallback){
//                 call_user_func($nullCallback);
//                 // $nonNullCallback($value);
//             }
//         }else{
//             call_user_func($nonNullCallback);
//             // $nonNullCallback($value);
//         }
//     }
// }