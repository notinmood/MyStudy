/**
 * @file   : 6.2.keyof应用.ts
 * @time   : 10:25
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    interface Human {
        name: string,
        age: number,
        gender: boolean,
    }

    class Service {
        constructor(private person: Human) {
        }

        getPersonData1(fieldName: string) {
            return this.person[fieldName];
        }

        getPersonData2(fieldName: keyof Human) {
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
    targetValue = service.getPersonData1("name");
    console.log(targetValue);

    // // 以下代码编译期正确；但运行期是会出现 undefined 的
    targetValue = service.getPersonData1("city");
    console.log(targetValue);

    console.log("─分割线─────────────────");

    targetValue = service.getPersonData2("name");
    console.log(targetValue);

    // // 以下代码在编译期就会出现错误，从而保证了代码的质量。
    // targetValue = service.getPersonData2("city");
    // console.log(targetValue);
}
