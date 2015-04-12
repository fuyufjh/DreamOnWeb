目录结构
========

## 总结构

    DreamOnWeb
    │  app.js
    │  package.json
    │  README.md
    │
    ├─bin
    ├─docs 
    ├─models
    ├─node_modules
    ├─public 
    │  │  favicon.ico
    │  │
    │  ├─css
    │  ├─images
    │  ├─js
    │  └─upload
    ├─routes
    ├─test
    └─views

## 前端部分

原则上只允许前端工程师修改。

### views

存放所有网页EJS模板。

    views
    │  index.ejs     对应网址 "/index"
    │  login.ejs
    │  ···
    ├─cus
    │  │  index.ejs  对应网址 "/cus/index"
    │  └  introduction.ejs
    ├─mus
    └─site
    
### public

存放样式表、JS脚本

    public
    ├─css
    │  └─index   "/index" 使用的css
    │      style.css
    ├─images
    │  ├─index   "/index" 使用的图片
    │  └─dreamon_logo.png  多个网页共享的图片
    ├─js
    │  ├─ index       "/index" 使用的脚本
    │  └─ jquery.min.js    多个网页共享的脚本
    └─upload  上传的资源

## 后端部分

原则上只允许后端工程师修改。

### routes

路由代码，与网址对应。

    routes
        index.js      对应 "/"
        customers.js  对应 "/cus"
        musician.js   对应 "/mus"
        site.js       对应 "/site"

### models

模块代码和功能代码（例如短信接口）。

    models
        db.js       数据库
        user.js     User模块
        customer.js
        musician.js

## 文档 doc

使用 Markdown(.md) 存放，中文书写，英文命名（git不支持中文文件名）。

文档中无需标明作者、时间、修改记录，这些信息由 git 提供。

## 测试

mocha 测试模块，按功能分成若干文件。