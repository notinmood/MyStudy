"""
 * @file   : bb.py
 * @time   : 11:59
 * @date   : 2023/12/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home")
    page.get_by_role("link", name="登录").click()
    # page.goto("https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=791872301")

    start_new_page(page)
    start_new_page(page)

    # with page.expect_popup() as page2_info:
    #     page.locator(".new-creation__icon > svg").first.click()
    # page2 = page2_info.value
    # page2.get_by_placeholder("请在这里输入标题").click()
    # page2.get_by_placeholder("请在这里输入标题").fill("op2")

    # # ---------------------
    context.close()
    browser.close()


def start_new_page(home_page):
    with home_page.expect_popup() as sub_page_info:
        home_page.locator(".new-creation__icon > svg").first.click()
    sub_page = sub_page_info.value

    sub_page.get_by_placeholder("请在这里输入标题").click()
    sub_page.get_by_placeholder("请在这里输入标题").fill("op1")
    sub_page.get_by_text("新建消息", exact=True).click()
    sub_page.get_by_role("link", name="写新图文").click()
    sub_page.get_by_placeholder("请在这里输入标题").click()
    sub_page.get_by_placeholder("请在这里输入标题").fill("标题2")
    sub_page.locator("body").press("Control+s")


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
