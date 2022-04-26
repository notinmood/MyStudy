/**
 * @file   : 1.自定义迭代器.ts
 * @time   : 9:40
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

interface IteratorInterface {
    next: () => {
        value: any
        done: boolean
    }
}

function createIterator(array: any[]): IteratorInterface {
    let index = 0
    let len = array.length

    return {
        next: function () {
            return index < len ? { value: array[index++], done: false } : { value: undefined, done: true }
        }
    }
}

const iterator = createIterator([1, 2, 3]);

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }
console.log(iterator.next()) // { value: undefined, done: true }

console.log('─────────────────────────────────────');


