import { CodeDictionary } from '../utils/const'
import { Response, NextFunction } from 'express'
import Result from '../types/Restful'
import logger from '../utils/logger'
import { isDev } from '../utils/const'

// token相关错误信息
const tokenCodeDictionary = {
    credentials_required: CodeDictionary.JWT_ERROR_REQUIRED,
    invalid_token: CodeDictionary.JWT_ERROR_EXPIRED,
}

// 登录态过期的地方
const defineNoTokenList = ['get']

/**
 *  错误中间件
 */
export default (err, req, res: Response, next: NextFunction) => {
    logger(err, req)
    isDev() && console.log(`GLOBAL ERROR: ----> ${err}`)

    if (err.name !== 'UnauthorizedError') {
        console.log('Error caught: ', err)
    } else {
        err.code = tokenCodeDictionary[err.code]
    }

    if (defineNoTokenList.includes(req.path as never)) {
        return res
            .status(200)
            .json(new Result(CodeDictionary.EXPIRES_LOGIN, '登录态过期'))
    } else {
        return res
            .status(err.status)
            .json(new Result(err.code, err?.inner?.message))
    }
}
