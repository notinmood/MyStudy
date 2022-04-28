/**
 * @file   : 2.在联合类型上的应用.ts
 * @time   : 7:47
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function getLength(something: string | number): number {

    /**
     * 无论 something 是数字还是字符串，条件 if(<string>something) 总是成立，
     * 因为 类型断言不是类型转换，不会改变内存上对象的所属类型的情形。
     */
    if (<string>something) {
        console.log("YY 1.string 断言成立！");
    } else {
        console.log("NN 1.string 断言不成立！");
    }

    // +--------------------------------------------------------------------------
    // |::说明·| 但是条件 if ((<string>something).length)不一定总是成立，因为不是所有的类型都有属性 length
    // +--------------------------------------------------------------------------
    //使用断言调用length到时候，IDE和编译器不会报错。但实际执行**.length的时候，依然是 undefined
    // (特别注意：JavaScript 等动态语言访问不存在的变量或者变量成员的时候，不会抛出异常，只会显示 undefined。这个特性不错。)
    console.log("存在吗:" + (<string>something).length); //undefined

    if ((<string>something).length) {
        console.log("YY 2.string 断言成立！");
        return (<string>something).length;
    } else {
        console.log("NN 2.string 断言不成立！");
        return something.toString().length;
    }


}

const result = getLength(123);
console.log(result);
