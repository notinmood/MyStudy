from builtins import *


def display_name():
    print(f"我是在moduleA中执行的代码，我的__name__为:{__name__}")


if __name__ == '__main__':
    display_name()

# output
# 我是在moduleA中执行的代码，我的__name__为:__main__