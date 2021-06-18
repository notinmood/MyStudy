from builtins import *
from inspect import getgeneratorstate


def simple_demo(a):
    print("start: a = ", a)
    b = yield a
    print("b = ", b)
    c = yield a + b
    print("c = ", c)


'''
总结：
每条yield语句，实际编译为3条子语句。
每次send触发的时候：
1、执行上一条yield的第三条子语句（获取用户输入的信息）
2、执行本条yield的前两条子语句（return 数据给调用方send、停止程序）
（第一次使用send(None)的时候，是激活生成器，没有上面提到的第一步--不用获取用户的输入）
'''

if __name__ == '__main__':
    sd = simple_demo(10)  # 如果是普通函数，通过（）这种方式就开始执行了。但此处创建了一个生成器，但里面的代码没有执行。
    print(getgeneratorstate(sd))  # 从检测出的状态也可以发现，其为“GEN_CREATED”
    result = sd.send(None)  # 从第6行一直执行到第7行。但第7（yield这一行）行会分为3个部分（本send（None）触发前2个部分）：1、return一个数据给调用方。2、停下来。
    print("send(None)之后，得到的返回值为{}".format(result))  # 这句会显示return出来的返回值（返回值为10的a信息）
    print(getgeneratorstate(sd))  # 因为生成器已经停下来了，所以检测其状态为“GEN_SUSPENDED”

    result = sd.send(20)  # 从第7行的第3部分，执行到第9行的第1部分：
    # A、执行第7行的第3部分--接受send（20）传过来的参数20，将其赋值给变量b
    # B、执行第8行（这行简单，直接执行）
    # C、执行第9行，第9行共分为3个部分（本send（20）触发前两个部分）：1、return一个数据返回给调用方send（此处返回的是a+b的值30）。2、停下来
    print("send(20)之后，得到的返回值为{aa}".format(aa=result))  # 可以发现得到send（20）的返回值为30
    print(getgeneratorstate(sd))  # 因为生成器再次停下来了，所以检测其状态为“GEN_SUSPENDED”

    result = sd.send(50)  # 从第9行的第3部分，执行到第10行，接着触发异常：
    # A、执行第9行的第3部分 -- 接受send（50）传递过来的参数50，将其赋值为变量c
    # B、执行第10行
    # C、因为是send（n）触发的本次执行，因此会继续向下选择下一个yield关键字，以便return数据，但是没有找到。抛出异常。
    print("send(50)之后，得到的返回值为{aa}".format(aa=result))  # 只能显示出第10句的结果。因为此句在异常出现之后，所以本句无法显示
    print(getgeneratorstate(sd))  # 因为此句在异常出现之后，所以本句无法显示
