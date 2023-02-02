import { CodeDictionary } from '../utils/const'

// API信息
export default class Result {
    public code: CodeDictionary
    public msg: string
    public data?: any

    constructor(code: number, msg: string, data?: any) {
        this.code = code
        this.msg = msg
        data && (this.data = data)
    }
}
