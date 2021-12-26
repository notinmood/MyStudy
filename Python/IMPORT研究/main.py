# # main.py
# print('main')
# dir()
# print('----------------')
#
# index = __import__('index')
# # dir(index)
# index.sayHello()
# index.sayHelloZhCn()


# main.py
# print('main')
from builtins import __import__, print, type

archives = __import__('archives.user', fromlist=['User'])
archives = __import__('archives.user')

print(type(archives))
print(archives.__name__)
# u = archives.user.User()
# u.sayHello()
# archives.user


# f = getattr(archives, "sayHello")
# f()
# archives.sayHello()
# print(archives.user)
