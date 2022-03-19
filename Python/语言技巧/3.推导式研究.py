"""
 * @file   : 3.推导式研究.py
 * @time   : 16:11
 * @date   : 2022/3/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

# +--------------------------------------------------------------------------
# |....说明....| Python里面有个很棒的语法糖（syntactic sugar），它就是 list comprehension，
# 有人把它翻译成“列表推导式”，也有人翻译成“列表解析式”。名字听上去很难理解，但是看它的语法就很清晰了。
# 虽然名字叫做 list comprehension，但是这个语法同样适用于dict、set等这一系列可迭代（iterable）数据结构。
# +--------------------------------------------------------------------------
"""
1. list 列表推导式
"""
my_list = [x ** 2 for x in range(10)]
print(my_list)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

my_list = [x * x for x in range(10) if x % 2 == 0]
print(my_list)  # [0, 4, 16, 36, 64]

my_list = [(x, y) for x in range(5) for y in range(4)]
print(my_list)  # [(0, 0), ..., (4, 2), (4, 3)] 等共包含20个元素

"""
2. set 集合推导式
"""
chars = {w for w in "Qingdao City"}
print(chars)  # {'o', ..., 'y', 'a'} 因为set的特性，具体的元素顺序每次不一样

"""
3. dict 字典推导式
"""
my_dict = {"A": "a",
           "B": "b",
           "C": "c"}

my_dict = {k: my_dict[k] * 2 for k in my_dict}
print(my_dict)  # {'A': 'aa', 'B': 'bb', 'C': 'cc'}
