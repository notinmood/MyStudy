# 说明

1. 在项目根目录下执行以下代码，启动数据库 API 服务器：
`json-server --watch --port 53000 json-server快速数据api服务器/db.json`
2. 可以通过以下 url 访问数据：
   1. 获取所有数据 `http://localhost:53000/course`
   2. 获取单条数据 `http://localhost:53000/course?id=1000`