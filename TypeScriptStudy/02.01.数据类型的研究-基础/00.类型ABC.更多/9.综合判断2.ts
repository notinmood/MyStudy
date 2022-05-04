/**
 * @file   : 9.综合判断2.ts
 * @time   : 18:23
 * @date   : 2022/5/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // ==0. 类型准备==
    class A {
    }

    class AChild extends A {
        public SpecialLog(): void {
            console.log("specialLog");
        }
    }

    class B {
    }


    console.log("1 基本类型判断------string、number、object、null、undefined------->");
    let str: string = "hello";
    let b1: number;
    let b2: number = 3;
    let c1: any;
    let c2: any = 6;
    let c3: any = "6";
    let d1: Array<number>;
    let d2: Array<number> = [1, 2, 3, 4];
    let e = null;
    console.log(typeof str === 'string');//true
    console.log(typeof str === 'number');//false

    //未赋值无法获取到类型
    // console.log(typeof b1)
    type t2 = typeof b2;
    console.log(typeof b2);//number
    console.log(typeof c1);//undefined
    console.log(typeof c2);//number
    console.log(typeof c3);//string
    //未赋值无法获取到类型
    // console.log(typeof d1)

    console.log(typeof d2);//object
    type td2 = typeof d2; //Array<number>
    console.log(typeof e);//object


    console.log("2  引用类型判断-------接口或类类型,Array和RegExp------->")
    let a: A = new A();
    let aChild: AChild = new AChild();
    a = aChild;
    console.log(a instanceof A);//true
    console.log(aChild instanceof A);//true
    console.log(a instanceof B);//false

    if (a instanceof AChild) { //instanceof的类型转换功能
        console.log("a是AChild的实例");
        a.SpecialLog();//specialLog
    } else {
        console.log("NN,a不是AChild的实例");
    }
    console.log([] instanceof Array);//true
    console.log({} instanceof Object);//true
    console.log(/\d/ instanceof RegExp);//true


    console.log("3 断言-----------即as和<>的用法------>")
    let p1: number = 2345;
    let p2: any = 643;
    let p3: any = "643";
    // console.log("p1.length:"+p1.length+",p2.length:"+p2.length);//编译器直接报错
    // console.log("p1.length:" + (p1 as String).length + ",p2.length:" + (p2 as String).length);//因为p1确定是number类型，这里强转报错
    console.log("p2.length:" + p2.length);
    console.log("p2.length:" + (p2 as String).length);
    console.log("p3.length:" + p3.length);
    console.log("p3.length:" + (p3 as String).length);
    console.log("1:" + (a as B));
    console.log("2:" + (a as AChild));

    const _name = (a as AChild).SpecialLog();//specialLog
    console.log("3:" + _name);//undefined //因为函数 SpecialLog()没有返回值
    console.log("4:" + (<AChild>a).SpecialLog());//specialLog 和 undefined
    console.log("-------->end");

}
