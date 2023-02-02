import config from '../proj.config'
import { Sequelize } from 'sequelize'
import { isDev } from '../utils/const'

const { MYSQL_CONFIG } = config

const { database, user, password, options } = MYSQL_CONFIG

const sequelize = new Sequelize(database, user, password, {
    ...options,
    logging: isDev() ? console.log : false,
})

export default sequelize
