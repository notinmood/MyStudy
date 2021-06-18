from builtins import print


def common_func(a):
    print("我是普通函数执行的逻辑。传入进来的数据为{0}".format(a))
    return a * 2


def yield_func(a):
    print("a={0}".format(a))
    yield a


if __name__ == '__main__':
    cf = common_func(3)
    print("普通函数可以读取到返回值{}".format(cf))

    print("-" * 50)

    yf = yield_func(2)
    print("yield函数返回值为{}".format(yf))

# output
# 我是普通函数执行的逻辑。传入进来的数据为3
# 普通函数可以读取到返回值6
# --------------------------------------------------
# yield函数返回值为 < generator object yield_func at 0x000001DCFC1F3430>
