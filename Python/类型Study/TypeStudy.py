import types
from builtins import *


def my_function(arg_name: str):
    return arg_name


pass

if __name__ == '__main__':
    # 1. 使用types枚举查看数据类型
    print(types.BuiltinFunctionType)
    print(types.FunctionType)

    print(types.BuiltinMethodType)
    print(types.MethodType)

    # 2. 使用type函数获取数据类型
    print(type(1))
    print(type(my_function))

    # 3. 使用isinstance函数判断数据类型
    if isinstance(1, int):
        print("ok,1 是int类型")
    else:
        print("not ok,1不是int类型")
    pass

    if isinstance(my_function, types.FunctionType):
        print("ok,my_function 是函数类型")
    else:
        print("not ok,my_function不是函数类型")
    pass
