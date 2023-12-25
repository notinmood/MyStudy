from builtins import *


def create_generator():
    _list = range(3)
    for _i in _list:
        yield _i * _i
    pass


pass

if __name__ == '__main__':
    my_generator = create_generator()

    print('1. my_generator type为:')
    print(type(my_generator))
    print('2. my_generator 对象为:')
    print(my_generator)

    print('3. my_generator 内容为:')
    print('3.1 使用基础的方式： next() 函数调用 获取下一个值')
    print(next(my_generator))
    print(next(my_generator))
    print(next(my_generator))
    # # 由于 my_generator 对象 已经没有值了，所以再次调用 next() 函数 就会报错
    # print(next(my_generator))

    # print('3.2 使用 for 循环调用 获取下一个值')
    # for i in my_generator:
    #     print(i)
    # pass
