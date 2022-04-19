// +--------------------------------------------------------------------------
// |::说明·| symbol 类型的属性名称，一定要用[]定义和调用，[]内的名称不能有引号（否则就是普通字符串类型的属性名称了）。
// +--------------------------------------------------------------------------

const sym = Symbol();

let obj = {
    [sym]: "value",
    xx   : "abc",
};

console.log(obj[sym]); // "value"
console.log(obj["xx"]); // "abc"
