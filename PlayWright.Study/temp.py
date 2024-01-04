from playwright.sync_api import Playwright, sync_playwright


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home?t=home/index")
    page.get_by_role("link", name="登录").click()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home?t=home/index")
    with page.expect_popup() as page1_info:
        page.locator(".new-creation__icon > svg").first.click()
    page1 = page1_info.value
    # page1.goto("https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit&isNew=1&type=77&createType=0")
    page1.get_by_placeholder("请在这里输入标题").click()
    page1.get_by_placeholder("请在这里输入标题").fill("\n人民日报金句文摘|20231227")
    page1.get_by_text("图片", exact=True).click()
    page1.get_by_role("button", name="我知道了").click()
    page1.get_by_text("图片 本地上传 从图片库选择").click()
    page1.locator("input[name=\"file\"]").click()
    page1.locator("input[name=\"file\"]").set_input_files(["00.人民日报-词句之美1080-810.Cover2.jpg", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png"])
    page1.get_by_role("link", name="写新图文").click()
    page1.get_by_placeholder("请在这里输入标题").click()
    page1.get_by_placeholder("请在这里输入标题").click()
    page1.get_by_placeholder("请在这里输入标题").fill("人民日报金句选读|20231225")
    page1.get_by_role("link", name="从图片库选择").click()
    page1.get_by_role("link", name="Conver (4)").click()
    page1.get_by_role("img", name="图片描述").first.click()
    page1.get_by_role("button", name="下一步").click()
    page1.get_by_role("button", name="完成").click()
    page1.get_by_text("合集 icon 合集标签可被推荐和订阅").click()
    page1.get_by_text("#人民日报金句选读").click()
    page1.get_by_role("button", name="确定").click()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN")

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
