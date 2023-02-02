import crypto from 'crypto'
import logger from './logger'

// MD5
export const MD5 = (val) => crypto.createHash('md5').update(val).digest('hex')

/**
 * execute async function in this function so that you do not need trycatch in your service code
 * @param func async function
 * @returns [null, execRes] | [error, null]
 */
export const errorCaught = async (func: Function) => {
    try {
        const execRes = await func()
        return [null, execRes]
    } catch (error) {
        logger(error as Error)
        return [error, null]
    }
}
