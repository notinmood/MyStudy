from builtins import *


def outer_func(fn):
    print("我是outer内的逻辑")

    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs)

    return wrapper


@outer_func
def inner_func(a, b):
    print(f"传递进来的参数为{a},{b}")


if __name__ == '__main__':
    foo = inner_func(5, 7)
