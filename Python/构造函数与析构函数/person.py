"""
 * @file   : person.py
 * @time   : 7:50
 * @date   : 2021/12/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""


class Person:
    def __init__(self):
        """
        这是一个构造函数
        """
        print('我出生了')

    def __del__(self):
        """
        这是一个析构函数
        :return:
        """
        print('我走了')

    def eat(self):
        print('吃饭')

    @staticmethod
    def some_thing():
        print("some ting")
