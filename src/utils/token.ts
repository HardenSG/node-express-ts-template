const jwt = require('jsonwebtoken')
import config from '../proj.config'

const { tokenSecret, tokenExpiredTime } = config
// 分发token
export default (payload: any) =>
    jwt.sign(payload, tokenSecret, {
        expiresIn: tokenExpiredTime,
    })
