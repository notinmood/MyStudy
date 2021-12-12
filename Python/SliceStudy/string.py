"""
 * @file   : string.py
 * @time   : 15:30
 * @date   : 2021/12/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

if __name__ == '__main__':
    my_data = "i love China!"
    """
    通过[:]取切片的时候，他是一个前闭后开的区间。
    """

    # 取到倒数第一个，但不包含倒数第一个
    print(my_data[:-1])

    # 如果要要取到最后一个，那么冒号后就不写任何内容
    print(my_data[:])

    # 不取第0个
    print(my_data[1:])
