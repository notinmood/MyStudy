"""
 * @file   : 1.使用codegen自动生成代码.py
 * @time   : 7:38
 * @date   : 2023/12/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""
from playwright.sync_api import Playwright, sync_playwright, expect

"""
操作方法：
1. 在windows命令行，输入代码`codegen`,系统会自动启动对浏览器操作动作转代码的工作。
2. 此时，系统会自动打开新浏览器，我们在新浏览器的各种操作，pw会自动生成代码。
3. 将生成的代码复制到当前文件，就可以运行复现刚才的手工操作过程。
"""


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://www.baidu.com/")
    page.locator("#kw").click()
    page.locator("#kw").fill("qingda")
    page.get_by_text("青岛天气").click()

    # ---------------------
    context.close()
    browser.close()


with sync_playwright() as pw:
    run(pw)
