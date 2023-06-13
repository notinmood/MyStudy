from builtins import *

"""
普通的装饰器
"""


def inner_func(a, b):
    print(f"传递进来的参数为{a},{b}")


def outer_func(fn):
    print("我是outer内的逻辑")

    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs)

    return wrapper


if __name__ == '__main__':
    foo = outer_func(inner_func)
    foo(5, 7)
