from builtins import *


def create_generator():
    _list = range(3)
    for _i in _list:
        yield _i * _i


if __name__ == '__main__':
    my_generator = create_generator()

    print(type(my_generator))
    print(my_generator)

    # print(next(my_generator))
    # print(next(my_generator))
    # print(next(my_generator))
    # # print(next(my_generator))

    for i in my_generator:
        print(i)
