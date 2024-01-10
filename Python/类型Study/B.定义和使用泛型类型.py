"""
 * @file   : A.定义和使用泛型类型.py
 * @time   : 22:05
 * @date   : 2024/1/9
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from dataclasses import dataclass
from typing import TypeVar, Generic

# +--------------------------------------------------------------------------
# |::::TIPS::::| 定义泛型类型的注意事项
# ---------------------------------------------------------------------------
# 定义泛型类型的目的是控制对象实例中的某些属性的类型为泛型。定义泛型类型的时候：
#   1. 需要从typing模块导入TypeVar，然后使用TypeVar来声明一个名称为T的泛型类型
#   2. 类型需要从Generic[T]派生
# +--------------------------------------------------------------------------

T = TypeVar("T")
# 如果类型参数有多个，可以类似格式继续定义
U = TypeVar("U")
S = TypeVar("S")


# 1. 定义泛型类型
@dataclass
class ReturnResult(Generic[T]):
    """
    返回结果
    """
    status: bool = True
    message: str = ""
    data: T = None


if __name__ == '__main__':
    print("Hello, world!")

    # 2. 使用泛型类型
    result_str = ReturnResult[str](status=True, message="成功", data="Hello World")
    result_int = ReturnResult[int](status=True, message="成功", data=123)
    result_dict = ReturnResult[dict](status=True, message="成功", data={"name": "张三", "age": 30})

    print(result_str)
    print(result_int)
    print(result_dict)

    print(result_str.data)
    print(result_int.data)
    print(result_dict.data)
    print(result_dict.data["name"])
