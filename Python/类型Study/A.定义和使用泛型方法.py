"""
 * @file   : A.定义和使用泛型方法.py
 * @time   : 22:20
 * @date   : 2024/1/9
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from typing import TypeVar

T = TypeVar("T")


def my_print(data: T) -> T:
    print(f"传入的参数类型为：{type(data)}")
    print(f"传入的参数数值为：{data}")
    return data


if __name__ == '__main__':
    my_print("Hello World")
    print("──分割线───────────────────────────────────")
    my_print(123)
    print("──分割线───────────────────────────────────")
    my_print(12.34)
