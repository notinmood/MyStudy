"""
 * @file   : ui.py
 * @time   : 13:24
 * @date   : 2023/12/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from typing import TypedDict
# 1. 步骤一、创建强类型
Movie = TypedDict("Movie", {"name": str, "year": int})

# 2. 步骤二、再创建命名的字典对象实例
# 2.1 创建对象实例方式1
movie1: Movie = {
    "name": "Blade Runner",
    "year": 1982,
}
# 2.2 创建对象实例方式2
movie2 = Movie(
    name="Blade Runner",
    year=1982,
)

print(movie1)
print(movie2)
