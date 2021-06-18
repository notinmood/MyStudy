function bar(p) {
    console.log(p);

    if (p.e == undefined) {
        console.log('NNN没有e属性');
    } else {
        console.log(`e= ${p.e}`);
    }
}

bar({
    'a': 'aa',
    'b': 'bb',
    'c': 'cc',
    'd': 0,
});

// or 将对{}组装和函数调用分开写
let pp = {
    'a': 'aa',
    'b': 'bb',
    'c': 'cc',
    'd': 0,
};

bar(pp);


// --output--------
// { a: 'aa', b: 'bb', c: 'cc', d: 0 }
// NNN没有e属性
