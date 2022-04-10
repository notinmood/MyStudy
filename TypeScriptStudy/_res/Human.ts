import { ICanEat } from './ICanEat';
import { ICanTalk } from './ICanTalk';
export class Human implements ICanEat, ICanTalk {
  talk() {
    console.log(`我会说话！`);
  }
  eat() {
    console.log(`我能吃东西！`);
  }
  name: string;
  introduceSelf(): void {
    console.log(`我是${this.name},很高兴认识你！`);
  };
}