var TSS;
(function (TSS) {
    var _res;
    (function (_res) {
        var Student = /** @class */ (function () {
            function Student(name, age) {
                this.name = name;
                this.age = age;
            }
            /**
             * 获取学生的姓名
             * @returns
             */
            Student.prototype.getName = function () {
                return this.name;
            };
            Student.prototype.getAge = function () {
                return this.age;
            };
            /**
             * 讲话
             * @returns
             */
            Student.talk = function () {
                return "hello,我是一个学生！";
            };
            return Student;
        }());
        _res.Student = Student;
    })(_res = TSS._res || (TSS._res = {}));
})(TSS || (TSS = {}));
