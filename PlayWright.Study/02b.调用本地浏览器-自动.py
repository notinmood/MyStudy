import subprocess

from playwright.sync_api import Playwright, sync_playwright


# TODO:xiedali@2024/01/02 本case仍然有问题，需要进一步fix。暂时请使用 02a.半自动的方式

def run(playwright: Playwright) -> None:
    # 3. 使用给定的监视端口，启动浏览器
    browser = playwright.chromium.connect_over_cdp("http://localhost:9999")
    # context = browser.new_context()
    context = browser.contexts[0]
    page = context.new_page()
    page.goto("https://baijiahao.baidu.com/builder/rc/home")

    input("请手动按回车键继续...")
    # ---------------------
    context.close()
    browser.close()


if __name__ == '__main__':
    # 1. 首先启动一个调式浏览器的进程
    chrome_path = r'"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --profile-directory="Profile 2"'
    debugging_port = "--remote-debugging-port=9999"

    command = f"{chrome_path} {debugging_port}"
    subprocess.Popen(command, shell=True)

    # 2. 启动playwright自动化项目
    with sync_playwright() as ps:
        run(ps)
    pass
