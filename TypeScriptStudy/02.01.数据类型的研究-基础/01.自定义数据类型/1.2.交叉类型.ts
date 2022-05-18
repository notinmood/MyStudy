/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 06:59:30
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-17 18:14:12
 * @FilePath     : 2.交叉类型.ts
 * @Description  :
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved.
 */

import * as blts from "basiclibrary.ts/lib/index";
import {Bird}    from './_res/Bird';
import {Human}   from './_res/Human';
import {IFly}    from './_res/IFly';
import {ITalk}   from './_res/ITalk';

export namespace MyNameSpace {
    // +--------------------------------------------------------------------------
// |::说明·| 使用 & 定义数据类型
// +--------------------------------------------------------------------------
    /**
     * 通过 type 定义的标的信息，虽然可以看做一个新的数据类型，但他本质是其他既有数据类型的别名。
     */
    type typeWW = IFly & ITalk;
    let some: typeWW;

    some = {
        fly() {
            console.log("I can fly!");
        },
        talk() {
            console.log("I can talk!");
        },
    }

    some.fly();
    some.talk();

    console.log('。。。这是分隔符。。。');

    type typeBB = Human & Bird;
    let myName: typeBB;

    let human = new Human();
    let bird = new Bird();
    let result = blts.ObjectHelper.combine(human, bird);
    myName = result;

    myName.display();
    myName.fly();
}
