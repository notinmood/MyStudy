"""
 * @file   : student.py
 * @time   : 7:53
 * @date   : 2024/4/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""


class Student(object):
    """ """

    def __init__(self, name: str):
        self.name = name

    def say_hello(self, message: str = "你好"):
        return f"{self.name},{message}"
