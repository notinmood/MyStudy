from builtins import *


class XiaoMing:
    def __init__(self):
        pass

    first_name = '明'
    last_name = '小'

    @property
    def full_name(self):
        return self.last_name + self.first_name

    def get_full_name(self):
        return self.last_name + self.first_name


if __name__ == '__main__':
    xm = XiaoMing()
    # 对一个方法使用了 @property装饰器，就可以直接用属性的方式调用了，而不用安装方法的方式（最后要加一个括号）
    print(xm.full_name)
    # 传统方法的调用，最后要加一个括号
    print(xm.get_full_name())
