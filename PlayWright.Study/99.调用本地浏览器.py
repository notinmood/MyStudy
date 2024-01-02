from playwright.sync_api import Playwright, sync_playwright, expect
import subprocess

# TODO:xiedali@2024/01/02 本case仍然有问题，需要进一步fix

# +--------------------------------------------------------------------------
# |::::说明::::| 本case仍然有问题，需要进一步fix
# ---------------------------------------------------------------------------
# ▌参考资料：https://www.bilibili.com/video/BV1xP411Q7LM/?spm_id_from=333.337.search-card.all.click&vd_source=8619f4685a9921cde7d8b55bbbd499c3
# +--------------------------------------------------------------------------

def run(playwright: Playwright) -> None:
    # browser = playwright.chromium.launch(headless=False)
    browser = playwright.chromium.connect_over_cdp("http://localhost:9999")
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://mp.weixin.qq.com/cgi-bin/home")
    page.get_by_role("link", name="登录").click()
    # page.goto("https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=579371992")
    with page.expect_popup() as page1_info:
        page.locator(".new-creation__icon > svg").first.click()
    page1 = page1_info.value
    # page1.goto("https://mp.weixin.qq.com/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit&isNew=1&type=77&createType=0&token=579371992&lang=zh_CN&timestamp=1703733969498")
    page1.get_by_placeholder("请在这里输入标题").click()
    page1.get_by_placeholder("请在这里输入标题").fill("标题1")

    # page1.close()

    # ---------------------
    context.close()
    browser.close()


if __name__ == '__main__':
    chrome_path = r'"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --profile-directory="Profile 2"'
    debugging_port = "--remote-debugging-port=9999"

    command = f"{chrome_path} {debugging_port}"
    subprocess.Popen(command, shell=True)

    with sync_playwright() as ps:
        run(ps)
