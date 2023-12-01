from builtins import *

"""
普通的装饰器
"""


def inner_func(a, b):
    print(f"给内部函数传递进来的参数为{a},{b}")


def outer_func_directly(fn):
    """
    对内部函数不进行包装，直接返回的方式
    :param fn:
    :return:
    """
    print("NO-对内部函数不进行包装，直接返回的方式")
    return fn


pass


def outer_func_wrapper(fn):
    print("YES-对内部函数进行包装，然后返回的方式")

    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs)

    return wrapper


pass

# # 带参数的装饰器
# def outer_func_with_args(arg1, arg2):
#     def inner_func_with_args(fn):
#         print(f"我是outer内的逻辑{arg1},{arg2}")
#
#         def wrapper(*args, **kwargs):
#             return fn(*args, **kwargs)
#
#         return wrapper
#
#     return inner_func_with_args
#
#
# pass


if __name__ == '__main__':
    foo = outer_func_wrapper(inner_func)
    foo(5, 7)

    bar = outer_func_directly(inner_func)
    bar(6, 9)
