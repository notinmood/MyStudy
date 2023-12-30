"""
 * @file   : 3.推导式研究.py
 * @time   : 16:11
 * @date   : 2022/3/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from BasicLibrary.data.stringHelper import StringHelper

# +--------------------------------------------------------------------------
# |::::说明::::| Python里面有个很棒的语法糖（syntactic sugar），它就是 list comprehension，
# 有人把它翻译成“列表推导式”，也有人翻译成“列表解析式”。名字听上去很难理解，但是看它的语法就很清晰了。
# 列表推导式（list comprehension）是一种快速生成列表的语法，它以非常简洁的代码实现列表的创建，大体步骤如下：
#  1. 创建或使用一个既已存在的集合（比如range(10)）
#  2. 使用for in 遍历这个集合，每次返回一个元素（比如x）
#  3. 将返回的元素（比如x）或进行处理后的元素（比如x*2）置入一个 [] 列表中，这就形成了 list 推导式。
#
# 虽然名字叫做 list comprehension，但是这个语法同样适用于dict、set等这一系列可迭代（iterable）数据结构。
# +--------------------------------------------------------------------------

"""
1. list 列表推导式
"""
my_list = [x ** 2 for x in range(10)]
print(my_list)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

my_list = [_item * 2 for _item in range(10)]
print(my_list)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

my_list = [x * x for x in range(10) if x % 2 == 0]
print(my_list)  # [0, 4, 16, 36, 64]

my_list = [_item for _item in "qingdao city"]
print(my_list)  # ["q", "i", "n", "g", "d", "a", "o", " ", "c", "i", "t", "y"]

my_list = [(x, y) for x in range(5) for y in range(4)]
print(my_list)  # [(0, 0), ..., (4, 2), (4, 3)] 等共包含20个元素

"""
2. set 集合推导式
"""
chars = {w for w in "Qingdao City"}
print(chars)  # {'o', ..., 'y', 'a'} 因为set的特性，具体的元素顺序每次不一样

chars = {StringHelper.upper_all_chars(_item) for _item in "Beijing City"}
print(chars)  # {'J', 'E', 'C', 'I', ' ', 'G', 'N', 'Y', 'B', 'T'} 因为set的特性，具体的元素顺序每次不一样

"""
3. dict 字典推导式
#  注意：对dict的迭代方式的不同，得到的结果也是不同的。具体参考文件“9.迭代字典的TIP.py” 
"""
my_dict = {"A": "a",
           "B": "b",
           "C": "c"}

my_display = {k: my_dict[k] * 2 for k in my_dict}
print(my_display)
## --output---------------------------
# {'A': 'aa', 'B': 'bb', 'C': 'cc'}

my_display = {_item: my_dict[_item] for _item in my_dict}
print(my_display)
## --output---------------------------
# {'A': 'a', 'B': 'b', 'C': 'c'}

my_display = {k * 2: v * 3 for k, v in my_dict.items()}
print(my_display)
## --output---------------------------
# {'AA': 'aaa', 'BB': 'bbb', 'CC': 'ccc'}

# 可以加入过滤条件
my_display = {k * 2: v * 3 for k, v in my_dict.items() if k == "A"}
print(my_display)
## --output---------------------------
# {'AA': 'aaa'}
