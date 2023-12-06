"""
 * @file   : TypedDict使用.py
 * @time   : 9:13
 * @date   : 2023/12/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from typing import TypedDict


class MyUser(TypedDict):
    name: str
    age: int
    sex: str


if __name__ == '__main__':
    print("──以下是普通字典的信息───────────────────────────────────")
    # 1. 普通的字典（dict）
    common_dict = {'name': 'ShanDong', 'age': 25, 'sex': 'male'}
    print(common_dict)
    # 使用字典内key的时候，必选通过字符串的形式引用
    print(common_dict['name'])

    print("──以下是强类型字典的信息───────────────────────────────────")

    # 2. 强类型字典（TypedDict）
    User = TypedDict('User', {"name": str, "age": int, "sex": str})
    print(User)

    # 使用强类型字典的时候，可以直接使用key引用，不需要字符串形式
    User.name = 'shandong'
    User.age = 25
    User.sex = 'male'

    print(User.name)
    print(User.age)

    print("──mm───────────────────────────────────")
    mm = User(name='shandong', age=25, sex2='male')
    print(mm)

    ww = User()
    print(ww)

    # zhangsan = user(name='zhangsan', age=25, sex='male')
    # zhangsan.sex = 'female'
    # print(zhangsan)
    print("──分割线───────────────────────────────────")
    lisi: User = {'name': 'lisi', 'age': 25, 'sex': 'male'}
    print(lisi)

    # print(lisi.name)
    print("──分割线───────────────────────────────────")
    print(MyUser)
    wangwu: MyUser = {'name': 'wangwu', 'age': 25, 'sex4': 'male'}
    print(wangwu)

    # print(MyUser.name)
    print("──分割线───────────────────────────────────")
    zhao = MyUser(**{"name": "zhaoliu", "age": 25, "sex": "male"})
    # zhao.name = 'zhao'

    pass
