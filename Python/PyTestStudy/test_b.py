"""
 * @file   : test_a.py
 * @time   : 13:28
 * @date   : 2021/12/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
import pytest


@pytest.fixture(scope='function')
def setup_function():
    print('my_function called.')


def teardown():
    print("teardown_function called." + __file__)


def test_foo():
    print("i am in test_foo")


def test_bar():
    print("i am in test_bar")
