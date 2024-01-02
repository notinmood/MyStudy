"""
 * @file   : 识别iframe并写入内容.py
 * @time   : 6:51
 * @date   : 2024/1/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from playwright.sync_api import Playwright, sync_playwright


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home")
    page.get_by_role("link", name="登录").click()

    start_new_page(page)

    # # ---------------------
    # context.close()
    # browser.close()


def start_new_page(home_page):
    with home_page.expect_popup() as sub_page_info:
        home_page.locator(".new-creation__icon > svg").first.click()
    pass

    sub_page = sub_page_info.value

    sub_page.get_by_placeholder("请在这里输入标题").click()
    sub_page.get_by_placeholder("请在这里输入标题").fill("我是标题1")

    # 各种测试逻辑写在这里
    # 1.定位iframe和iframe内的元素
    element_frame = sub_page.frame_locator('//*[@id="ueditor_0"]')
    element_body = element_frame.locator("body")

    # 2.向指定的元素内写入内容
    element_body.fill("我是内容1")

    # 3.从指定的元素内读取内容
    # old_content = element_body.text_content()
    # old_content = element_body.inner_html()
    # print(old_content)

    # 模拟键盘输入信息。（此时要注意屏幕上光标的位置：信息会输入到光标的位置上。）
    sub_page.keyboard.type("\n我们是中国人的自豪！")

    # 上传图片
    sub_page.get_by_text("图片", exact=True).click()

    # 上传按钮的xpath
    upload_xpath = '//*[@id="js_editor_insertimage"]/ul/li[1]/input'
    upload_element = sub_page.locator(upload_xpath)
    upload_element.set_input_files(
        r'Z:\MyImages\RMRB.人民日报.素材\99.处理完成的素材\AC33\2023-10-17 15-52-51_中式美学 那些文人墨客用诗词表达的秋天-1.webp')

    sub_page.get_by_text("图片", exact=True).click()
    upload_element.set_input_files(
        r'Z:\MyImages\RMRB.人民日报.素材\99.处理完成的素材\AC33\2023-11-01 14-13-02_拒绝内耗 让人点赞无数的励志文案-2.webp')

    # 此时为等待光标定位到iframe的富文本框中
    sub_page.wait_for_timeout(6000)

    sub_page.keyboard.type('\n |Jerry')

    # ────────────────────────
    # 保存页面
    sub_page.locator("body").press("Control+s")
    sub_page.locator('//*[@id="js_submit"]/button/span').click()
    sub_page.wait_for_timeout(2000)


if __name__ == '__main__':
    # # 1.使用自销毁模式
    # with sync_playwright() as ps:
    #     run(ps)
    # pass

    # # 2.使用手动调用模式
    ps = sync_playwright().start()
    run(ps)

    # 结束调用
    ps.stop()
