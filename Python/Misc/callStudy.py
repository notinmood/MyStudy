from builtins import *

'''
特别注意：
__call__方法是在对象"实例"上使用()的时候，才会被调用。
(在对象"类型"上()的时候，调用的是初始化方法__init__)
'''


class Demo:
    def __init__(self, param_a):
        print("我是在init里面的逻辑")
        self.PA = param_a

    def __call__(self, *args, **kwargs):
        print("我是在Call里面的逻辑")


if __name__ == '__main__':
    # 创建对象实例的时候，会调用__init__方法
    demo = Demo('aa')
    # 在实例上继续用()的时候，是调用的__call__方法（其他时候call不会被调用）
    demo()
