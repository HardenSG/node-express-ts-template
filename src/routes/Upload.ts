import { CodeDictionary } from '../utils/const'
import express from 'express'
import Restful from '../types/Restful'
import uploadImg from '../utils/uploadImg'
const UploadRouter = express()

UploadRouter.post('/', (req, res, next) => {
    try {
        const payload = uploadImg(req.body.fileName)
        res.status(200).json(
            new Restful(CodeDictionary.SUCCESS, 'ok', {
                ...payload,
                data: new Date().toUTCString(),
            }),
        )
    } catch (error) {
        res.status(500).json(new Restful(CodeDictionary.COMMON_ERROR, 'error'))
    }
    next()
})

export default UploadRouter
