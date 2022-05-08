/**
 * @file   : index.ts
 * @time   : 5:20
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


// 裸类型参数,没有被任何其他类型包裹，即T。
// 裸类型的是对每个值单独判断，然后返回（用|连接的）联合的结果。
type NakedType<T> = T extends boolean ? "YES" : "NO"
// 类型参数被包裹的在元组内，即[T]
// 包装类型，对元组（或数组）容器内的每个元素统一判断，必须所有的元素都满足才行。
// 本例中，如果元组内的每个元素都是boolean，那么才返回 "YES。有一个不能确定，就返回 "NO"
// let aa = [1, 2, 5, 8];
// let bb = [1, true, false, 5];
// let cc = [true, false, false];
// 只有元组 cc 才满足条件，能返回 "YES"
type WrappedType<T> = [T] extends [boolean] ? "YES" : "NO";

// 1. 裸类型在实例化时会自动分发成联合类型，这就是可分配条件类型。
// 例如，T extends U ? X : Y使用类型参数A | B | C 实例化 T 的时候，
// 解析为 (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)
type isDistributed = NakedType<number | boolean>;

// 2. 包装类型在实例化的时候，内部每个元素的类型一致或者不一致只能出现一种情形，
// 所以不会形成联合类型，不是分布式
type noDistributed = WrappedType<number | boolean>;
type noDistributed2 = WrappedType<boolean>;

let isDis: isDistributed;
isDis = "YES";
isDis = "NO";

let noDis: noDistributed;
noDis = "NO";
// noDis 的类型为“NO”，其值只能是 “NO”，其他值无法编译通过
// noDis = "YES";

let noDis2: noDistributed2;
noDis2 = "YES";
// noDis2 的类型为“YES”，其值只能是 “YES”，其他值无法编译通过
// noDis2 = "value";
