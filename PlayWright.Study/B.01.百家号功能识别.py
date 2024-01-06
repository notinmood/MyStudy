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

# +--------------------------------------------------------------------------
# |::::TIPS::::| 说明
# ---------------------------------------------------------------------------
# 使用Playwright的debug模式启动浏览器，并连接到已经手动打开的浏览器。具体步骤请参看“02a.调用本地浏览器-半自动”
# +--------------------------------------------------------------------------


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

    # 上传第1幅图片
    my_image_file_full_name = r'Z:\BD素材同步\BillFish素材库\RMRB.人民日报\00.Published\202312\百度文史\20231201\00.人民日报-金句文摘1080-810.Cover.jpg'
    upload_image(page_publishing, my_image_file_full_name)

    # 上传第2幅图片
    my_image_file_full_name = r'Z:\BD素材同步\BillFish素材库\RMRB.人民日报\00.Published\202312\百度文史\20231201\7ba503dca7264256ac4d5b896af11e48~tplv-tt-origin-asy25aS05p2hQOS4jeiusuS5kOW3suadjg==.image.jpg'
    upload_image(page_publishing, my_image_file_full_name)

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


def upload_image(page_using, image_full_name):
    # 上传图片
    page_using.locator('#edui33_body > div.edui-box.edui-icon.edui-default').click()
    element_upload = page_using.locator('div.uploader-inner div')
    my_image_file_full_name = image_full_name

    with page_using.expect_file_chooser() as fc_info:
        element_upload.click()
        file_chooser = fc_info.value
        file_chooser.set_files(my_image_file_full_name)
    pass
    # 在上传图片的弹出窗口，点击“确定”，将百家号会将图片插入到编辑器中
    page_using.wait_for_selector('div.image-wrapper')
    page_using.locator('.cheetah-modal-footer button:nth-child(2)').click()
    page_using.keyboard.press("Enter")


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
