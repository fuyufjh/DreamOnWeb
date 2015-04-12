模型和数据库
============

## 总结构

| 表含义    |  模型名  |    表名      |                 备注                   |
|:---------:|:--------:|:------------:|:--------------------------------------:|
| 用户      | User     | users        | 用于登录，包含用户类型：客户/音乐人    |
| 客户      | Customer | customers    |                                        |
| 音乐人    | Musician | musicians    |                                        |
| 作品      | Work     | works        | 用于公开展示的作品                     |
| 订单      | Order    | orders       |                                        |
| DEMO      | Demo     | demos        | 订单内的DEMO，不公开                   |
| 评价      | Comment  | comments     |                                        |
| 客服单    | Ticket   | tickets      | 订单号——问题                           |

## 用户 User

登录信息，会被放在 session 中。

|      项目     |       字段       |        备注        |
|:-------------:|:----------------:|:------------------:|
| 手机号        | phoneNumber      | 唯一，作为登录账户 |
| 邮箱          | email            |                    |
| 密码          | password         | 使用Hash加密       |
| 用户类型      | userType         | 1: 客户 2: 音乐人  |
| 注册日期      | registrationDate | Date格式           |
| 昵称/真实姓名 | nickname         |                    |
