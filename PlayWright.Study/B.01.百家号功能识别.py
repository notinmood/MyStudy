"""
 * @file   : B.01.百家号功能识别.py
 * @time   : 16:18
 * @date   : 2024/1/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from playwright.sync_api import Playwright, sync_playwright
from BasicLibrary.data.dateTimeHelper import DateTimeHelper

from _utils.locatorHelper import LocatorHelper


def run(playwright: Playwright) -> None:
    # 启动浏览器的debug模式
    browser = playwright.chromium.connect_over_cdp("http://localhost:9999")

    # 使用已经手动打开的浏览器
    context = browser.contexts[0]
    context.set_default_timeout(80000)  # 设置默认超时时间为80秒

    page_publishing = context.new_page()
    page_publishing.goto("https://baijiahao.baidu.com/builder/rc/edit?type=news")

    page_publishing.get_by_placeholder("请输入标题（8 - 30字）").click()
    page_publishing.get_by_placeholder("请输入标题（8 - 30字）").fill(f"我是一个标题 - {DateTimeHelper.get_string()}")

    # 1.定位iframe和iframe内的元素
    inner_frame = page_publishing.frame_locator('//*[@id="ueditor_0"]')
    inner_body = inner_frame.locator("body")
    inner_body.fill("我是一个内容")
    page_publishing.keyboard.type("\n我们是中国人的自豪！")
    page_publishing.keyboard.type(f"\n - 山东解大劦@{DateTimeHelper.get_string()}")

    # 上传图片
    page_publishing.locator('#edui33_body > div.edui-box.edui-icon.edui-default').click()
    element_upload = page_publishing.locator('div.uploader-inner div')
    # element_upload.click()
    my_image_file_full_name = r'Z:\BD素材同步\BillFish素材库\RMRB.人民日报\00.Published\202312\百度文史\20231201\00.人民日报-金句文摘1080-810.Cover.jpg'

    # element_upload.set_input_files(my_image_file_full_name)

    with page_publishing.expect_file_chooser() as fc_info:
        element_upload.click()
        file_chooser = fc_info.value
        file_chooser.set_files(my_image_file_full_name)

    page_publishing.locator('.cheetah-modal-footer button:nth-child(2)').click()

    # 保存草稿
    my_locator = page_publishing.locator('div.editor-component-operator div:nth-child(5) button')
    print(f"找到页面上保存按钮了吗？{LocatorHelper.is_exist(my_locator)}")
    my_locator.click()

    # #  M1.等待5秒，等待页面保存完成后关闭页面
    # page_publishing.wait_for_timeout(5000)
    # page_publishing.close()

    # M2. 调式期间，通过input的方式暂停系统运行。（正式运行期间请，使用M1代码）
    input("请手动按回车键继续...")

    # # ---------------------
    # # 关闭浏览器
    # context.close()
    # browser.close()


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
