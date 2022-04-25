/**
 * @file   : 1.入门.ts
 * @time   : 7:19
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 以下代码仅能编译通过，不能运行；
// |::一一·| 本例中，declare var 并没有真的定义一个变量，只是声明了全局变量 jQuery 的类型，
// |::一一·| 仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：jQuery('#foo');
// +--------------------------------------------------------------------------

// 以下两种声明是一样。
declare var jQuery: (selector: string) => any;
// declare function jQuery(selector: string): any;

jQuery('#foo');
