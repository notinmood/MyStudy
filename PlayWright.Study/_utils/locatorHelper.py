"""
 * @file   : locatorHelper.py
 * @time   : 17:48
 * @date   : 2024/1/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""


class LocatorHelper(object):
    @staticmethod
    def is_exist(locator):
        """
        判断元素定位器是否存在
        :param locator:
        :return:
        """
        if locator.count():
            return True
        else:
            return False
        pass

    pass


pass
