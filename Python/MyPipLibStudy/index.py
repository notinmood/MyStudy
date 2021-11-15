"""
 * @file   : index.py
 * @time   : 14:12
 * @date   : 2021/11/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

from HilandBasicLibrary.data.StringHelper import *

if __name__ == '__main__':
    original = "My name is {0},my age is {1}."
    result = StringHelper.format(original, "zhangsan", 20)
    print(result)
