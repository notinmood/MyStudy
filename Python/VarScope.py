from builtins import *

g = 6


def func_1(a):
    print(a)
    print(g)


def func_2(a):
    print(a)
    g = 5
    print(g)


def display_global():
    print(g)


if __name__ == '__main__':
    func_1(3)
    display_global()
