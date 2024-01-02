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

    start_new_page(page)

    # # ---------------------
    context.close()
    browser.close()


def start_new_page(home_page):
    with home_page.expect_popup() as sub_page_info:
        home_page.locator(".new-creation__icon > svg").first.click()
    pass

    sub_page = sub_page_info.value

    sub_page.get_by_placeholder("请在这里输入标题").click()
    sub_page.get_by_placeholder("请在这里输入标题").fill("我是标题1")

    # 各种测试逻辑写在这里
    # ...

    # ────────────────────────
    # 保存页面
    sub_page.locator("body").press("Control+s")


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
