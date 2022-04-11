/*
 * @Author       : Shandong Xiedali
 * @Mail         : 9727005@qq.com
 * @Date         : 2022-04-10 20:33:48
 * @LastEditors  : Shandong Xiedali
 * @LastEditTime : 2022-04-11 20:59:01
 * @FilePath     : Human.ts
 * @Description  : 
 * Copyright (c) 2022 by Hiland & RainyTop, All Rights Reserved. 
 */
import { ICanEat } from './ICanEat';
import { ICanTalk } from './ICanTalk';
export class Human implements ICanEat, ICanTalk {
  talk() {
    console.log(`我会说话！`);
  }
  eat() {
    console.log(`我能吃东西！`);
  }
  name: string | undefined;
  introduceSelf(): void {
    console.log(`我是${this.name},很高兴认识你！`);
  };
}