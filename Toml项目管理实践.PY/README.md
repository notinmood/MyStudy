# 说明：
（后续添加的说明：项目管理推荐使用poetry调用pyproject.toml文件进行。本项目只是前期对toml的入门研究，不具有实际项目应用价值。）
安装下面推荐的项目目录格式设置好之后，就可以编译和发布项目到pypi平台了。

1. 安装构建和上传工具

    ```shell
    python -m pip install --upgrade build
    python -m pip install --upgrade twine
    ```

2. 打包（使用build）

   `python -m build`
3. 发布（使用twine）

    ```shell
    twine upload dist/*
    # 或者使用poetry（如果有的话）
    poetry -m publish 
    ```

|参考：https://zhuanlan.zhihu.com/p/666166082#/

## 项目结构的推荐格式
|使用Poetry项目管理工具的new命令可以自动生成次目录结构
```shell
tree ./ ./ 
├── LICENSE 
├── README.md 
├── pyproject.toml 
├── src 
│ └── npts # src 下面是包名，包下面是业务代码 
│      ├── __init__.py 
│      └── core.py 
└── tests 3 directories, 5 files
```

## pyproject.toml的说明

1. Python从PEP 518开始引入的使用pyproject.toml管理项目元数据的方案。
2. 该方案已被大多数Python项目采用，并作为PEP 621的实现。
3. pyproject.toml文件用于定义项目的元数据，例如依赖项、版本号等。
4. 该文件应放置在项目的根目录下，并使用特定的语法和结构。
5. 可以使用第三方工具或库（如pip、setuptools等，但极度推荐使用poetry）来解析和处理pyproject.toml文件。
6. 该方案已被证明是管理Python项目的有效方式，并已成为标准。

|参考：https://blog.csdn.net/ViniJack/article/details/134133414#/

### 示例：

```shell
[tool.poetry]
name = "your-project-name"
version = "0.1.0"
description = "A short description of your project"
authors = ["Your Name <you@example.com>"]
dependencies = [
    "requests",
    "python-dotenv"
]
[tool.poetry.dependencies]
requests = "^2.28.1"
python-dotenv = "^0.19.2"
[tool.poetry.dev-dependencies]
pytest = "^6.2.5"
flake8 = "^4.0.1"
[project]
name = "your-project-name"
version = "0.1.0"
description = "A short description of your project"
authors = ["Your Name <you@example.com>"]
dependencies = [
    "requests",
    "python-dotenv"
]
[project.scripts]
test = "pytest"
[tool.poetry.scripts]
my-script = "path.to.script:main"
[tool.poetry.build]
requires = ["wheel"]
command = "poetry build"
[tool.poetry.publish]
command = "poetry publish"  
```

