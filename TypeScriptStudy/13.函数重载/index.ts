/**
 * @file   : index.ts
 * @time   : 6:38
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void ;
function reverse<T>(x:T){
    // if(T is String){
    //
    // }
    // InstanceType(T)

    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

let _name;
_name = reverse(123);
console.log(_name);

_name = reverse("qingdao");
console.log(_name);
