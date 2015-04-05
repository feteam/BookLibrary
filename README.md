# BookLibrary

一个RESTful风格的Backbone.js应用程序，实现了对电子书的简单管理。数据库：Mongodb，服务器：Node.js。项目来自《Developing Backbone.js Applications》这本书，在原程序的基础上进行了修改并增加了一些功能。

## 功能：

+ 添加图书

+ 修改图书

+ 查询图书

+ 删除图书

## API

```
/api/books       GET    返回所有图书

/api/books       POST   添加图书

/api/books:id    GET    返回单条图书信息

/api/books:id    PUT    修改图书

/api/books:id    DELETE    删除图书
```

## 安装NodeJS

到nodejs官网下载系统对应的安装包 [http://nodejs.org/](http://nodejs.org/)

## 安装Node模块

这里将通过package.json文件安装MongoDB, Express以及处理文件用的path

配置完node环境后，进入根目录，执行下面命令即可：

```
sudo npm install
```

然后就会自动安装所需要的node模块。

## 启动

node模块安装完成后，我们就可以启动服务了

```
node server.js
```

然后打开浏览器，通过[http://127.0.0.1:3000/](http://127.0.0.1:3000/)即可访问项目。


MIT
