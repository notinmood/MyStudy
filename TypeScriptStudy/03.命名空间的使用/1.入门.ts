import {TSS} from "../00.res/Employee";
import Employee = TSS._res.Employee;

let e = new Employee("zhangsan", 20);
const age = e.getAge();
console.log(age);
