import types
from builtins import *

# dir(types)
print(types.BuiltinFunctionType)
print(types.MethodType)
print(type(1))
if isinstance(1, int):
    print("ok")
