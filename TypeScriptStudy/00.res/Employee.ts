// +--------------------------------------------------------------------------
// |::说明·| 通过命名空间创建类型的例子。
// |::一一·|  命名空间和命名空间内的标的信息（比如本例的类型 Employee）都要export，否则Client代码找不到这些信息。
// +--------------------------------------------------------------------------

export namespace TSS._res {
    export class Employee {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        /**
         * 获取学生的姓名
         * @returns
         */
        getName(): string {
            return this.name;
        }

        getAge(): number {
            return this.age;
        }

        /**
         * 讲话
         * @returns
         */
        static talk() {
            return "hello,我是一个学生！";
        }
    }
}
