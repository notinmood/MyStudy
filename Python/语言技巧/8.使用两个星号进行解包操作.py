"""
 * @file   : 8.使用两个星号进行解包操作.py
 * @time   : 21:58
 * @date   : 2023/12/16
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

"""
▌参考资料：https://zhuanlan.zhihu.com/p/664917461
"""

if __name__ == '__main__':
    # 1. 基本解包示例
    fruits = ['apple', 'banana', 'orange']
    fruit1, fruit2, fruit3 = fruits
    print(fruit1)
    print(fruit2)
    print(fruit3)

    print('------------------------------------------')

    # 2. 解包嵌套结构
    person = ('John', 'Doe', 30, ('New York', 'USA'))
    first_name, last_name, age, (city, country) = person

    print(first_name)  # 输出: 'John'
    print(last_name)  # 输出: 'Doe'
    print(age)  # 输出: 30
    print(city)  # 输出: 'New York'
    print(country)  # 输出: 'USA'

    print('------------------------------------------')

    # 3. 解包函数返回值
    def get_name():
        return 'John', 'Doe'


    first_name, last_name = get_name()

    print(first_name)  # 输出: 'John'
    print(last_name)  # 输出: 'Doe'

    # 4. 解包可变长度的可迭代对象
    numbers = [1, 2, 3, 4, 5]
    a, b, *rest = numbers
    print(a, b)  # 输出: 1 2
    print(rest)  # 输出: [3, 4, 5]

    # # 如果长度小于变量数量，会引发 ValueError 异常
    # a, b, c, d, e, f = numbers  # ValueError: not enough values to unpack (expected 6, got 5)

    # my_dict = {'a': 1, 'b': 2, 'c': 3}
    #
    # print(**my_dict)
