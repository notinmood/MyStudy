from builtins import *


class XiaoMing:
    def __init__(self):
        pass

    @staticmethod
    def say_hello():
        print('同学你好')


if __name__ == '__main__':
    XiaoMing.say_hello()
    # 实例化调用也是同样的效果
    # 有点多此一举
    xm = XiaoMing()
    xm.say_hello()

# output----
# 同学你好
# 同学你好
