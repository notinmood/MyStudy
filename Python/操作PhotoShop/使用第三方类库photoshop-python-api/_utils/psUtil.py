"""
 * @file   : _util.py
 * @time   : 16:24
 * @date   : 2023/12/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from BasicLibrary.data.stringHelper import StringHelper


class PsUtil(object):
    layer_path_seperator = "/"

    @classmethod
    def find_layer(cls, layers, layer_code):
        """
        根据图层名称遍历（包括嵌套图层）各图层查找目标图层
        :param layers:
        :param layer_code:图层的名字name（字符串）或者图层的索引号index（数字），
                           1. 如果为字符串，可以包含图层路径，如：layer1/layer2/layer3；也可以是仅仅图层的名字（系统会自动迭代查找）。
                           2. 如果为数字，则表示图层的索引号，从0开始。
        :return:
        """
        # 判定layer_name的数据类型是否为数字
        if isinstance(layer_code, int) and layers[layer_code]:
            return layers[layer_code]
        pass

        # 判定layer_name的数据类型是否为字符串
        if isinstance(layer_code, str):
            if StringHelper.is_contains(layer_code, cls.layer_path_seperator):
                return cls.__find_layer_by_path(layers, layer_code)
            pass

            # 遍历图层列表
            for layer in layers:
                if layer.name == layer_code:
                    return layer
                pass

                # 如果当前图层是一个图层组，递归查找子图层
                if layer.blendMode == 1:  # blendMode为1表示图层组；blendMode为2表示一个普通图层
                    found_layer = cls.find_layer(layer.layers, layer_code)
                    if found_layer:
                        return found_layer
                    pass
                pass
            pass
        pass

        return None

    @classmethod
    def __find_layer_by_path(cls, layers, layer_path):
        def find_layer_recursive(_layers, path):
            for layer in _layers:
                if layer.name == path[0]:
                    if len(path) == 1:
                        return layer
                    else:
                        return find_layer_recursive(layer.layers, path[1:])
                    pass
                pass
            pass

            return None

        return find_layer_recursive(layers, layer_path.split(cls.layer_path_seperator))

    pass


pass
