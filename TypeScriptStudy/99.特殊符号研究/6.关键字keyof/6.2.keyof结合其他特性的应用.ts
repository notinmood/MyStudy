/**
 * @file   : 6.2.keyof应用.ts
 * @time   : 10:25
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// TODO:xiedali@2022/4/27 未完成

export namespace MyNameSpace {
    interface Human {
        name: string,
        age: number,
        gender: boolean,
    }

    type fieldType = keyof Human;

    class Service {
        constructor(private person: Human) {
        }

        // TODO:xiedali@2022/4/27 需要根据传入的参数，对返回值类型进行处理
        getPersonData<T>(fieldName: fieldType) {
            return this.person[fieldName];
        }
    }

    const zhangsan: Human = {
        name  : "zhangsan",
        age   : 20,
        gender: true,
    };

    const service = new Service(zhangsan);
    let targetValue: any;

    targetValue = service.getPersonData("name");
    console.log(targetValue);

    // // 以下代码在编译期就会出现错误，从而保证了代码的质量。
    // targetValue = service.getPersonData2("city");
    // console.log(targetValue);
}
