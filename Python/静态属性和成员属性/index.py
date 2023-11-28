"""
 * @file   : index.py
 * @time   : 15:56
 * @date   : 2023/11/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from 静态属性和成员属性.student import Student

if __name__ == '__main__':
    s = Student('ShanDong', 18, 80)

    # 1.1 调用成员属性
    print("1.1 调用成员属性:")
    print(s.name)

    # 1.2 调用成员方法
    print("# 1.2 调用成员方法:")
    grade = s.get_grade()
    print(grade)

    # 2.1 调用静态属性
    print("# 2.1 调用静态属性:")
    cn = Student.ChineseName
    print(cn)

    # 2.2 调用静态方法
    print("# 2.2 调用静态方法:")
    Student.say_hello()
