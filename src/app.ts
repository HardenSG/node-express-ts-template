import express from 'express'
import { InitRouter, UploadRouter } from './routes'
import { salaryToken, errorHandle } from './middleware'
import './utils/uploadImg'
const app = express()

// 解析请求体和params
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 通用中间件
app.use(salaryToken)

// 路由组件
app.use('/api', InitRouter)
app.use('/api/upload', UploadRouter)

// 兜底错误函数
app.use(errorHandle)
export default app
