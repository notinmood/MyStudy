"""
 * @file   : A.01.最大化窗口启动浏览器.py
 * @time   : 15:19
 * @date   : 2024/1/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""

from playwright.sync_api import Playwright, sync_playwright


def run(playwright: Playwright) -> None:
    # 最大化窗口启动浏览器
    browser = playwright.chromium.launch(headless=False, args=['--start-maximized'])
    context = browser.new_context(no_viewport=True)

    page_main = context.new_page()
    page_main.goto("https://baijiahao.baidu.com/")


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
