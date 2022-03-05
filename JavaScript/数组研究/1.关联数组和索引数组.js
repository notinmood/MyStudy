// 数字下标的数组称为索引数组。如果构建的时候没有指定数组的数字下标，那么系统会缺省分配。
// 索引数组可以构建的时候初始化，也可以单独给元素赋值
let indexArray = new Array("qingdao", "beijing", "shanghai");
indexArray[5] = "dalian";
indexArray.push("chengdu");

// 字符串为下标的数组称为关联数组。构建的时候需要明确指定字符串下标；访问的时候，不能使用数字下标获取元素。
// 关联数组，不能在构造函数里面初始化。只能通过给元素单独赋值。
let associativeArray = new Array();
associativeArray["Q"] = "qingdao";
associativeArray["B"] = "beijing";
associativeArray["S"] = "shanghai";

console.log(indexArray[0]); //qingdao
console.log(associativeArray[0]); //undefined
console.log(associativeArray["Q"])//qingdao