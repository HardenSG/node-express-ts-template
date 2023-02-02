# DESCRIPTION
>
> [仓库地址](https://github.com/HardenSG/node-express-ts-template.git)
>
> 这是一个NODE环境下的项目初始化配置。

支持内容：

1. NODE EXPRESS框架 + TS支持
2. 构建标准的环境变量设置
3. 安装 关系 && 非关系型数据库 标配ORM
4. 预置项目会用到的工具函数
5. 配置中间件 及 错误处理和响应处理
6. 配置CDN加速token认证
7. 错误日志 logger

# env
>
> 环境变量会涉及到数据库密码又拍云密码等，所以会被忽略不会上传至github中
> 建立.env 配置自己的环境变量

process.env.NODE_ENV 是要在package.json的script进行配置的
