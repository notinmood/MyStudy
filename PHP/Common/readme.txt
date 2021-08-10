helper.php是为了测试 composer.json里面的自动加载php文件的配置节点的文件,如下(具体见根目录的composer.json文件):

"autoload": {
    "files": [
      "Common/helper.php"
    ]
  }