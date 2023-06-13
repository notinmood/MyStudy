from builtins import *


class XiaoMing:
    def __init__(self):
        pass

    name = '小明'

    @classmethod
    def say_hello(cls):
        print('同学你好， 我是' + cls.name)
        print(cls)


if __name__ == '__main__':
    XiaoMing.say_hello()

# output--
# 同学你好， 我是小明
# <class '__main__.XiaoMing'>
