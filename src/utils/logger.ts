import moment from 'moment'
import fs from 'fs'
import path from 'path'

const basePath = path.join(__dirname, '../../logger')

/**
 *  print logger According to date you can looking for the error msg in this folder -> logger
 */
export default (error: Error, req?: any) => {
    const curDate = moment().format('YYYY-MM-DD ')
    const curTime = moment().format('YYYY-MM-DD hh:mm:ss')
    const fullPath = `${basePath}/${curDate}.txt`

    const splitStr = `----------------${
        req ? `WEB SERVER ERROR` : `SYSTEM ERROR`
    }----------------`
    const footStr = '-'.repeat(splitStr.length)

    let reqErrorCon = ''
    req &&
        (reqErrorCon = `
    IP：${req.ip}
    ORIGIN：${req.origin}
    REFERER：${req.referer}
    PATH：${req.path}
    USER_AGENT：${req.headers['user-agent']}`)

    const loggerCon = `
${splitStr}
    TIME：${curTime} 
    ERROR_NAME：${error.name} 
    ERROR_MSG：${error.message} 
    ${reqErrorCon && reqErrorCon}
${footStr}
    `
    fs.appendFile(fullPath, loggerCon, { encoding: 'utf8' }, (err) => {
        console.log(err)
    })
}
