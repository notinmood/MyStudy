"""
 * @file   : ui.py
 * @time   : 13:24
 * @date   : 2023/12/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from typing import TypedDict

Movie = TypedDict("Movie", {"name": str, "year": int})

movie1: Movie = {
    "name": "Blade Runner",
    "year": 1982,
}

movie2 = Movie(
    name="Blade Runner",
    year=1982,
)

print(movie1)
print(movie2)
