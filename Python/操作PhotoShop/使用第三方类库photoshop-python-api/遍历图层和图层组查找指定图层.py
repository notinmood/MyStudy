"""
 * @file   : 遍历图层和图层组查找指定图层.py
 * @time   : 18:12
 * @date   : 2023/11/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
import photoshop.api as ps
from BasicLibrary.projectHelper import ProjectHelper


def find_layer(layers, layer_name):
    # 遍历图层列表
    for layer in layers:
        if layer.name == layer_name:
            return layer

        # 如果当前图层是一个图层组，递归查找子图层
        if layer.blendMode == 1:  # blendMode为1表示图层组；blendMode为2表示一个普通图层
            found_layer = find_layer(layer.layers, layer_name)
            if found_layer:
                return found_layer

    return None


pass

if __name__ == '__main__':
    # 打开PhotoShop应用程序
    app = ps.Application()

    # 打开指定的图片文件
    root_path = ProjectHelper.get_root_physical_path()
    file_path = f'{root_path}\\操作PhotoShop\\使用第三方类库photoshop-python-api\\_res\\multi-layer.psd'
    doc = app.open(file_path)

    # 获取所有图层
    _layers = doc.layers

    # 查找指定的图层
    _layer_name = '图层 6'  # 替换为你要查找的图层名称
    _found_layer = find_layer(_layers, _layer_name)

    if _found_layer:
        print(f"找到指定图层: {_found_layer.name}")
    else:
        print(f"未找到指定图层: {_layer_name}")

    # 关闭图片文件
    doc.close()
