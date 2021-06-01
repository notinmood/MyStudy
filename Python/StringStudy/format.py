from builtins import *

x = 10
y = 20

if __name__ == '__main__':
    # 要么都写数字索引，要么都不写；不能有的写有的不写
    print("x,y的值为{},{}".format(x, y))
    print("x,y的值为{0},{1}".format(x, y))
    # print("x,y的值为{0},{}".format(x, y))
