"""
 * @file   : 推导式.py
 * @time   : 17:56
 * @date   : 2023/7/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

# 1. list 推导式
my_list = [_item * 2 for _item in range(10)]
print(my_list)
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# 2. dict 接复式
my_dict = {_item: _item ** 2 for _item in range(10)}
print(my_dict)
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}


# 3. set 接复式
my_set = {_item for _item in range(10)}
print(my_set)
# {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
