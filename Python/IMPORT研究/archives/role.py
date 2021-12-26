# role.py
from hilandBasicLibrary.data.reflectHelper import ReflectHelper

print('role')


def say_hello():
    print('hello role')
    print(ReflectHelper.get_current_method_name())
