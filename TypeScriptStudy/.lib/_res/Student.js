"use strict";
// +--------------------------------------------------------------------------
// |::说明·| 通过命名空间创建类型的例子
// +--------------------------------------------------------------------------
var TSS;
(function (TSS) {
    var _res;
    (function (_res) {
        class Student {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            /**
             * 获取学生的姓名
             * @returns
             */
            getName() {
                return this.name;
            }
            getAge() {
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
        _res.Student = Student;
    })(_res = TSS._res || (TSS._res = {}));
})(TSS || (TSS = {}));
//# sourceMappingURL=Student.js.map