from builtins import *

"""
调用第三方库
"""
# import HilandBasicLibrary.data.StringHelper as sh
from HilandBasicLibrary.data.StringHelper import StringHelper

"""
调用本地的库
"""
# from StringHelper import *

x = 10
y = 20

if __name__ == '__main__':
    # 要么都写数字索引，要么都不写；不能有的写有的不写
    print("x,y的值为{},{}".format(x, y))
    print("x,y的值为{0},{1}".format(x, y))
    # print("x,y的值为{0},{}".format(x, y))

    name = "小明"
    height = 175
    print(f"{name}的身高是{height}cm")

    print("────────────────────────使用DIY方法────────────────────────")
    whole = StringHelper.format("{name}的身高是{height}", name=name, height=height)
    print(whole)

    whole = StringHelper.format("{0}的身高是{1}", name, height)
    print(whole)
