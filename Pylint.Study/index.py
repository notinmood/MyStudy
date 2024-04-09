"""
 * @file   : index.py
 * @time   : 7:51
 * @date   : 2024/4/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

from utils.student import Student

if __name__ == "__main__":
    student = Student("zhangsan")
    print(student.say_hello())
