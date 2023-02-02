import { CodeDictionary } from '../utils/const'
import Result from '../types/Restful'

/**
 *  模拟你的service层处理函数
 * @returns Promise<Result>
 */
const Handle_Root_Get = async (): Promise<Result> => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('error'))
        }, 2000)
    })
    return new Result(CodeDictionary.SUCCESS, 'ok!')
}

export { Handle_Root_Get }
