"""
 * @file   : TypedDict使用.py
 * @time   : 9:13
 * @date   : 2023/12/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from typing import TypedDict

if __name__ == '__main__':
    # 1. 普通的字典（dict）
    common_dict = {'name': 'ShanDong', 'age': 25, 'sex': 'male'}
    print(common_dict)
    # 使用字典内key的时候，必选通过字符串的形式引用
    print(common_dict['name'])

    print("──分割线───────────────────────────────────")

    # 2. 强类型字典（TypedDict）
    user = TypedDict('Users', {"name": str, "age": int, "sex": str})
    print(user)

    # 使用强类型字典的时候，可以直接使用key引用，不需要字符串形式
    user.name = 'shandong'
    user.age = 25
    user.sex = 'male'

    print(user.name)
    print(user.age)

