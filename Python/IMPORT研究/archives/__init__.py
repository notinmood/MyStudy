from hilandBasicLibrary.data.reflectHelper import ReflectHelper

print('archives.__init__')
print(ReflectHelper.get_current_file_name())


# a = ReflectHelper.get_current_method_name()
# print(type(a))
# print(a)
# if a == "<module>":
#     print("aaa")


def say_hello():
    print('hello archives')
