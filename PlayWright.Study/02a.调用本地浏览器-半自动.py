import subprocess

from playwright.sync_api import Playwright, sync_playwright


# +--------------------------------------------------------------------------
# |::::TIPS::::| 说明
# ---------------------------------------------------------------------------
# 请遵循以下步骤：
# 1. 在桌面浏览器快捷图标上，右键选择“属性”，然后点击“快捷方式”选项卡，将“ --remote-debugging-port=9999”添加到目标字段中。形成如下："C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --profile-directory="Default" --remote-debugging-port=9999
# 2. 完全关闭浏览器（包括在任务管理器里面杀死浏览器的常驻进程）
# 3. 重新点击桌面上的图标启动浏览器，这样可以确保它正在使用新的端口（9999）进行调试。
# 4. 运行本case，观察结果
# ▌参考资料：https://www.bilibili.com/video/BV1xP411Q7LM/?spm_id_from=333.337.search-card.all.click&vd_source=8619f4685a9921cde7d8b55bbbd499c3
# +--------------------------------------------------------------------------

def run(playwright: Playwright) -> None:
    # 启动浏览器的debug模式
    browser = playwright.chromium.connect_over_cdp("http://localhost:9999")
    # 使用已经手动打开的浏览器
    context = browser.contexts[0]
    page = context.new_page()
    page.goto("https://baijiahao.baidu.com/builder/rc/home")

    input("请手动按回车键继续...")
    # ---------------------
    context.close()
    browser.close()


if __name__ == '__main__':
    with sync_playwright() as ps:
        run(ps)
    pass
