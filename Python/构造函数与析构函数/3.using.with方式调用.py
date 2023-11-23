"""
 * @file   : using.with方式调用.py
 * @time   : 17:37
 * @date   : 2023/7/7
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from 构造函数与析构函数.person import Person

with Person() as person:
    person.eat()

print("══════════════════════════")
print("程序结束")

# 我出生了
# __enter__里面
# 吃饭
# __exit__里面
# 我走了
