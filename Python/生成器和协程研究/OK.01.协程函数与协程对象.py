"""
 * @file   : OK.协程函数与协程对象.py
 * @time   : 20:14
 * @date   : 2024/2/17
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

# 1. 创建协程函数
async def hello():
    print("Hello ")



if __name__ == '__main__':
    # 2. 通过()对协程函数进行调用从而创建协程对象
    #  注意：此时的协程函数内的逻辑并没有执行
    coroutine = hello()
    print(coroutine)
