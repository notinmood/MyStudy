"""
 * @file   : OK.9.ParamSpec使用.py
 * @time   : 9:15
 * @date   : 2024/1/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from functools import reduce
from typing import Callable

## 在函数中使用[]定义泛型变量的时候，使用普通的大写字母定义普通泛型类型，使用**P定义ParamSpec泛型类型
## 如果在函数中使用[**P]定义ParamSpec泛型类型的时候，就不用以下语句单独声明ParamSpec泛型类型
# from typing import ParamSpec
# P = ParamSpec("P")


# +--------------------------------------------------------------------------
# |::::TIPS::::| 本代码的使用说明
# ---------------------------------------------------------------------------
# 1. 将位置参数、命名参数的类型都设置为P类型。通过在主函数中使用*args和**kwargs来接收，然后再传递给Callable函数
# 2. 将位置参数、命名参数都放在Callable函数的后面
# 3. 这样在主函数中，就可以使用P来接收位置参数和命名参数的类型了
# +--------------------------------------------------------------------------

def deal[** P](name: str, func: Callable[[str, P], int], *args, **kwargs):
    print("in deal...")
    print("──开始进入func调用───────────────────────────────────")
    result = func(name, *args, **kwargs)
    print("──离开func调用───────────────────────────────────")
    print("重新回到deal...")
    print("从func返回的结果是：", result)


def display_score_summary(name: str = "", *scores: int) -> int:
    result = reduce(lambda x, y: x + y, scores)
    print(f"学生【{name}】的分数是：{result}")
    return result


def display_score_detail(name: str = "", *empty, **scores_dict) -> int:
    # 以下是为了消除ide参数未使用的警告而做的PolyFill
    # noinspection all
    empty = empty

    result = 0

    for k, v in scores_dict.items():
        print(f"学生【{name}】的{k}分数是：{v}")
        result += v
    pass

    print(f"✅学生【{name}】的总分数是：{result}")

    return result


pass

if __name__ == '__main__':
    deal("张三", display_score_summary, 2, 3)

    _args = ()
    _kwargs = {"math": 90, "english": 95}
    deal("张三", display_score_detail, *_args, **_kwargs)
