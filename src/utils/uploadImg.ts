import config from '../proj.config'
import { MD5 } from '../utils'
import crypto from 'crypto'
import moment from 'moment'
const { operator, secret, bucket, domainName, imgPath } = config.UPYUN_CONFIG

/** 又拍云操作流程：
 * 1. 获取服务名： bucket
 * 2. 授权操作员 获取用户名和密码：operator & secret
 * 3. 上传方法：PUT
 * 4. 文件保存路径：imgPath
 * 5. 请求时间：GMT时间： Tue, 24 Jan 2023 05:53:45 GMT -> new Date().toUTCString()
 * 鉴权操作：
 * 1. 加密格式：请求方法&上传接口请求路径&上传时间
 * 2. 上传文件 https://v0.api.upyun.com/${bucket}/${pathFileName}
 * 3. 拼接加密消息 PUT&/forum-upyun1/demo.jpg&Tue, 24 Jan 2023 05:53:45 GMT
 * 4. 密钥生成MD5（内容是操作员密码）a05d690c20dd79e2cce28ace84a90783
 * 5. 使用HMAC计算signature：EomHZ9scRZLzWhgKHXCpazHWL/I=
 * 请求头部
 * 1. Authorization：UPYUN <操作员名>:<signature> -> UPYUN sg15620343859:EomHZ9scRZLzWhgKHXCpazHWL/I=
 * 2. Date：GMT
 * 3. Content-length
 *
 */
interface UploadToken {
    url: string
    Authorization: string
}
export default (fileName: string): UploadToken => {
    const curDate = new Date().toUTCString()
    const filePath = `${bucket}/${imgPath}/${fileName}`
    const cryptoMsg = `PUT&/${filePath}&${curDate}`
    const secretMD5 = MD5(secret)
    const signature = crypto
        .createHmac('sha1', secretMD5)
        .update(cryptoMsg, 'utf8')
        .digest()
        .toString('base64')
    const url = `https://v0.api.upyun.com/${filePath}`
    const Authorization = `UPYUN ${operator}:${signature}`
    return {
        url,
        Authorization,
    }
}
