/**
 * @file   : 1.数组的for使用.js
 * @time   : 12:24
 * @date   : 2022/3/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let myArray = [1, 5, 8];
myArray['a'] = "AA";

/**
 * for in 遍历的时候，得到是元素的 key
 */
for (const itemKey in myArray) {
    console.log(itemKey);
}

console.log('─────────────────────────────────────');
/**
 * for of 遍历数组的时候，得到的是元素的 value;
 * 并且 for of 只能得到 索引元素，而带 字符串类型 key 的关联元素无法获取到
 * (记忆方法： for 和 of 里面都有字母”o“，表示只能获取相同类型的元素，不同类型的元素无法获取)
 */
for (const itemValue of myArray) {
    console.log(itemValue);
}

console.log('─────────────────────────────────────');
/**
 * forEach 的功能等同于 for of(这两个语法都是 ES 后来添加的)，
 * 但 forEach里面可以使用元素的索引 index
 */
myArray.forEach((itemValue,itemIndex)=>{
    let displayData = `当前元素的索引为${itemIndex},元素的值为${itemValue}`;
    console.log(displayData);
});

