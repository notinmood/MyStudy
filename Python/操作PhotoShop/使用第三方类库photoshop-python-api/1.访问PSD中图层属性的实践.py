"""
 * @file   : 5.修改PSD中图层的名字.py
 * @time   : 21:20
 * @date   : 2023/12/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
import photoshop.api as psapi
from BasicLibrary.io.pathHelper import PathHelper
from _utils.psUtil import PsUtil

if __name__ == '__main__':
    # 文件名称
    file_base_name = '_464_rmrb.psd'
    current_path = PathHelper.get_dir_name(__file__, 1)
    file_full_name = PathHelper.combine(current_path, "_res", file_base_name)
    print(file_full_name)

    # 打开PhotoShop应用程序
    app = psapi.Application()

    # 打开指定的图片文件
    doc = app.open(file_full_name)

    # 获取所有图层
    layers = doc.layers

    layer = layers[0]

    print('layer.name:', layer.name)
    print('layer.positionLocked:', layer.positionLocked)
    print('layer.pixelsLocked:', layer.pixelsLocked)
    print('layer.isBackgroundLayer:', layer.isBackgroundLayer)
    print('layer.allLocked:', layer.allLocked)

    # 查找被嵌套的图层
    _layer_name = '/2024/01/01/'
    layer_nested = PsUtil.find_layer(layers, _layer_name)
    if layer_nested is None:
        print('未找到图层')
    else:
        layer_nested.textItem.contents = '/2028/10/11/'
        print('图层名称修改成功')
    pass


