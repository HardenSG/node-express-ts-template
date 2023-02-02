import { expressjwt as expressJwt } from 'express-jwt'
import config from '../proj.config'
import { ROUTER_WHITE_LIST } from '../utils/const'

/**
 *  解密token
 */
const { tokenSecret } = config
export default expressJwt({
    secret: tokenSecret,
    algorithms: ['HS256'],
}).unless({
    path: ROUTER_WHITE_LIST,
})
