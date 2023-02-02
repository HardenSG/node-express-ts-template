import { CodeDictionary } from '../utils/const'
import express from 'express'
import { Handle_Root_Get } from '../services/InitService'
import Restful from '../types/Restful'
import signToken from '../utils/token'
import { errorCaught } from '../utils'

const InitRouter = express.Router()

/**
 *  路由处理函数
 */
InitRouter.get('/', async (req, res, next) => {
    // try {
    //     const a = await Handle_Root_Get()
    //     res.status(200).json(a)
    // } catch (error) {
    //     console.log(1)

    //     res.status(500).end()
    // }
    const [error, execRes] = await errorCaught(Handle_Root_Get)
    execRes
        ? res
              .status(200)
              .json(new Restful(CodeDictionary.SUCCESS, 'ok', execRes))
        : res
              .status(500)
              .json(
                  new Restful(
                      CodeDictionary.COMMON_ERROR,
                      'somethings went wrong',
                  ),
              )

    next()
})

InitRouter.post('/genToken', (req, res, next) => {
    try {
        res.status(200).json(
            new Restful(CodeDictionary.SUCCESS, 'ok', {
                token: signToken({
                    ...req.body,
                }),
            }),
        )
    } catch (error) {
        res.status(500).json(
            new Restful(CodeDictionary.COMMON_ERROR, '生成密钥失败了呢'),
        )
    }
    next()
})

export default InitRouter
