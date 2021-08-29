//以下pattern1和2只是相差一个g,但结果完全不同
//g表示将这个pattern作为一个整体看待,
//不带g的除了会捕获到完整的匹配外,还会捕获到每个单独的分组(结果集的第二个元素后(包括第二个元素)都是分组的信息)


const str = "I love javascript and java";
console.log(str.match(/java(script)?/gi));
console.log(str.match(/java(script)?/));


console.log('────────────────────────')


const subject = "2008-11-31";
let pattern1 = /(\d{4})-(\d{2}-(\d\d))/g;
console.log(subject.match(pattern1));
//--output────────────────────────
// ["2008-11-31"]

let pattern2 = /(\d{4})-(\d{2}-(\d\d))/;
console.log(subject.match(pattern2));
//--output────────────────────────
// ["2008-11-31", "2008", "11-31", "31"]

//不使用()进行分组
let pattern3 = /\d{4}-\d{2}-\d\d/;
let matches = subject.match(pattern3);
let matchesType = typeof matches;
console.log(matchesType);
console.log(matches)
//--output────────────────────────
// object
// 2008-11-31


let pattern4 = /(\d{4}-\d{2}-\d\d)/;
matches = subject.match(pattern4);
console.log(matches)
//--output────────────────────────