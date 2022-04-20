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
        console.log("YY string 断言成立！");
    } else {
        console.log("NN string 断言不成立！");
    }

    // +--------------------------------------------------------------------------
    // |::说明·| 但是条件 if ((<string>something).length)不一定总是成立，因为不是所有的类型都有属性 length
    // +--------------------------------------------------------------------------
    if ((<string>something).length) {
        console.log("YY string 断言成立！");
        return (<string>something).length;
    } else {
        console.log("NN string 断言不成立！");
        return something.toString().length;
    }
}

const result = getLength(123);
console.log(result);


