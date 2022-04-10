namespace TSS._res {
    export class Student {
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
