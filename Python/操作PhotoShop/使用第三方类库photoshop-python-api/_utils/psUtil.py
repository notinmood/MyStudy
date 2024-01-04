"""
 * @file   : _util.py
 * @time   : 16:24
 * @date   : 2023/12/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from os import PathLike

from BasicLibrary.data.stringHelper import StringHelper
from BasicLibrary.io.fileHelper import FileHelper
from photoshop import Session
from photoshop.api import ActionDescriptor


# +--------------------------------------------------------------------------
# |::::TIPS::::| 本代码的使用说明
# ---------------------------------------------------------------------------
# 1. 本代码是Photoshop脚本开发的基础代码，可以用于快速开发Photoshop脚本
# 2. 代码中包含了一些常用的函数和类，可以用于处理Photoshop脚本开发中的常见问题
# 3. 本文件中经过验证的功能，要迁移至`BasicLibrary.PY`中，为其他项目共用
# +--------------------------------------------------------------------------

class PsUtil(object):
    # @classmethod
    # def find_layer(cls, layers, layer_code, layer_path_seperator="//"):
    #     """
    #     根据图层名称遍历（包括嵌套图层）各图层查找目标图层
    #     :param layer_path_seperator:如果layer_code是图层的路径，则需要本参数指定路径的分隔符，默认为"//"
    #     :param layers:待查找的图层列表（即到此集合中查找目标图层）
    #     :param layer_code:图层的名字name（字符串）或者图层的索引号index（数字），
    #                        1. 如果为字符串，可以包含用双斜线分割的图层路径，如：layer1//layer2//layer3；也可以是仅仅图层的名字（系统会自动迭代查找）。
    #                        2. 如果为数字，则表示图层的索引号，从0开始。
    #     :return:
    #     """
    #     # 判定layer_name的数据类型是否为数字
    #     if isinstance(layer_code, int) and layers[layer_code]:
    #         return layers[layer_code]
    #     pass
    #
    #     # 判定layer_name的数据类型是否为字符串
    #     if isinstance(layer_code, str):
    #         if StringHelper.is_contains(layer_code, layer_path_seperator):
    #             return cls.__find_layer_by_path(layers, layer_code, layer_path_seperator)
    #         pass
    #
    #         # 遍历图层列表
    #         for layer in layers:
    #             if layer.name == layer_code:
    #                 return layer
    #             pass
    #
    #             # 如果当前图层是一个图层组，递归查找子图层
    #             if layer.blendMode == 1:  # blendMode为1表示图层组；blendMode为2表示一个普通图层
    #                 found_layer = cls.find_layer(layer.layers, layer_code)
    #                 if found_layer:
    #                     return found_layer
    #                 pass
    #             pass
    #         pass
    #     pass
    #
    #     return None
    #
    # pass
    #
    # @classmethod
    # def __find_layer_by_path(cls, layers, layer_path, layer_path_seperator="//"):
    #     def find_layer_recursive(_layers, path):
    #         for layer in _layers:
    #             if layer.name == path[0]:
    #                 if len(path) == 1:
    #                     return layer
    #                 else:
    #                     return find_layer_recursive(layer.layers, path[1:])
    #                 pass
    #             pass
    #         pass
    #
    #         return None
    #
    #     return find_layer_recursive(layers, layer_path.split(layer_path_seperator))
    #
    # pass
    #
    # @classmethod
    # def replace_image(cls, psd_full_name: PathLike, layer_code: str, new_image_full_name: PathLike,
    #                   is_auto_close: bool = True):
    #     if not FileHelper.is_file(new_image_full_name):
    #         return
    #     pass
    #
    #     if not FileHelper.is_file(psd_full_name):
    #         return
    #     pass
    #
    #     with Session(psd_full_name, action="open") as ps:
    #         app = ps.app
    #         document = ps.active_document
    #
    #         # 查找并设置活动图层
    #         layer_matched = cls.find_layer(document.layers, layer_code)
    #         if not layer_matched:
    #             return
    #         pass
    #
    #         document.activeLayer = layer_matched
    #         replace_contents = app.stringIDToTypeID("placedLayerReplaceContents")
    #         id_null = app.charIDToTypeID("null")
    #         action_descriptor = ActionDescriptor()
    #         action_descriptor.putPath(id_null, new_image_full_name)
    #         app.executeAction(replace_contents, action_descriptor)
    #
    #         document.save()
    #
    #         if is_auto_close:
    #             document.close()
    #             ps.close()
    #         pass
    #     pass
    #
    # pass
    #
    # @classmethod
    # def unlock(cls, layers, layer_code, layer_path_seperator="//"):
    #     layer_matched = cls.find_layer(layers, layer_code, layer_path_seperator)
    #
    #     def release_lock_recursive(layer):
    #         if layer:
    #             try:
    #                 layer.positionLocked = False
    #             except:
    #                 pass
    #             pass
    #
    #             try:
    #                 layer.pixelsLocked = False
    #             except:
    #                 pass
    #             pass
    #
    #             try:
    #                 layer.transparentPixelsLocked = False
    #             except:
    #                 pass
    #             pass
    #
    #             try:
    #                 layer.allLocked = False
    #             except:
    #                 pass
    #             pass
    #         pass
    #
    #         try:
    #             if layer.parent:
    #                 release_lock_recursive(layer.parent)
    #             pass
    #         except:
    #             pass
    #         pass
    #
    #     pass
    #
    #     release_lock_recursive(layer_matched)
    #
    # pass

    @classmethod
    def display_layer_property(cls, layer):
        if layer:
            print('layer.name:', layer.name)
            print('layer.visible:', layer.visible)
            print('layer.isBackgroundLayer:', layer.isBackgroundLayer)
            print('layer.positionLocked:', layer.positionLocked)
            print('layer.pixelsLocked:', layer.pixelsLocked)
            print('layer.transparentPixelsLocked:', layer.transparentPixelsLocked)
            print('layer.allLocked:', layer.allLocked)
        else:
            print('layer is None')

    pass


pass
