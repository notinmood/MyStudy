# 说明
## 特别注意
1. export 和 export default 都可以导出任何类型的内容。
2. 但后面跟 {} 的时候，就不一样了：
   1. export{} 导出的不是一个标准对象，{}内只是一个语法结构。
   2. export default{} 导出的是一个标准的对象。

## 具体使用
1. export 可以作为修饰符直接放在各个成员前面
```// export_01.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
export function get_fullName(){
    return `${firstName}·${lastName}`
}
```

2. 也可以将 export 放在文件末尾，统一向外暴露接口（推荐这种做法）
```// export_02.js
const firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function get_fullName() {
    return `${firstName}·${lastName}`
}

export {
    firstName, lastName, year, get_fullName
};
```
3. 当然 export 在文件末尾统一向外暴露的时候，也可以用 as 给接口加上别名
```// export_03.js
const firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function get_fullName() {
    return `${firstName}·${lastName}`
}

export {
    firstName as fn, lastName as ln, year as y,get_fullName as g_fn
};
```

注意：
export 后面的 {}：这个 {} 不是对象的表述语法，内部不是对象实例，不能用对象的语法书写内部成员。

4. 进行 export 的时候，可以搭配一个 default 关键字。这是告诉本模块的调用方，我是一个默认的导出对象（我是一个标准对象），你想怎么样用（导入的时候是不是要改名称都可以）都可以；而其他非默认的导出信息，你必须遵守名称规则使用。