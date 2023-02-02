import http from 'http'
import app from '../app'
import config from '../proj.config'
const { PORT } = config

const SERVER = http.createServer(app)

SERVER.listen(PORT, () => {
    console.log(PORT + '端口  监听中')
})
