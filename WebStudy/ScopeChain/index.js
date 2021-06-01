let x =10;
function foo(){
    console.log(`变量的值为${x}`)
}

function moo(fn){
    let x= 20;
    (function (){
        fn();
    })();
}

let m = moo(foo)
//--output---------
// 变量的值为10

