"""
 * @file   : 5.修改PSD中图层的名字.py
 * @time   : 21:20
 * @date   : 2023/12/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
import photoshop.api as psapi
from BasicLibrary.data.randomHelper import RandomHelper
from BasicLibrary.enums import RandomEnum
from BasicLibrary.io.fileHelper import FileHelper
from BasicLibrary.io.pathHelper import PathHelper
from _utils.psUtil import PsUtil

if __name__ == '__main__':
    # 文件名称
    file_base_name_no_extension = 'layerPropertyStudy'
    file_extension_name = '.psd'
    file_base_name = file_base_name_no_extension + file_extension_name
    current_path = PathHelper.get_dir_name(__file__, 1)
    res_path = PathHelper.combine(current_path, "_res")
    file_full_name = PathHelper.combine(res_path, file_base_name)

    new_file_base_name = f'{file_base_name_no_extension}_{RandomHelper.create(5, random_type=RandomEnum.LowerLetters)}{file_extension_name}'
    new_file_full_name = PathHelper.combine(res_path, new_file_base_name)
    FileHelper.copy(file_full_name, res_path, new_file_base_name)
    print(f'正在访问的文件为：{file_base_name}')

    # 打开PhotoShop应用程序
    app = psapi.Application()
    print('app.version:', app.version)

    # 打开指定的图片文件
    doc = app.open(new_file_full_name)

    # 获取所有图层
    layers = doc.layers
    # 获取第一个图层
    layer = layers[0]

    print('layer.name:', layer.name)
    print('layer.positionLocked:', layer.positionLocked)
    print('layer.pixelsLocked:', layer.pixelsLocked)
    print('layer.isBackgroundLayer:', layer.isBackgroundLayer)
    print('layer.allLocked:', layer.allLocked)

    # 查找被嵌套的图层
    _layer_name = '/2028/10/11/'
    layer_nested = PsUtil.find_layer(layers, _layer_name)
    if layer_nested is None:
        print('未找到图层')
    else:
        layer_nested.textItem.contents = '/2030/01/01/'
        print('图层名称修改成功')
    pass

    #  关闭文档及其清理其他各种资源
    doc.close()
    FileHelper.remove(new_file_full_name)
