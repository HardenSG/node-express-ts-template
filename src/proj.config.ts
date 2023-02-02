import dotenv from 'dotenv'
import { MongooseOptions } from 'mongoose'
import mysql2 from 'mysql2'
import { Options } from 'sequelize'
dotenv.config()

const sequelizeOptions: Options = {
    dialect: 'mysql',
    dialectModule: mysql2,
    dialectOptions: {
        charset: 'utf8mb4',
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
    host: process.env.MYSQL_DATABASE_HOST,
    port: process.env.MYSQL_DATABASE_PORT as unknown as number,
    pool: {
        max: 20,
        min: 1,
        idle: 30000,
        acquire: 60000,
    },
    timezone: '+08:00',
}
const mongooseOptions: MongooseOptions = {}

// 开发环境下配置
const devConfig = {
    HOST: 'localhost',
    PORT: '8000',
    projectIntro: {
        title: '这是我的博客系统',
        description: '这是我搭建的第一个node环境的项目模板配置',
        version: '0.9.0',
    },
    MYSQL_CONFIG: {
        // 数据库名称
        database: process.env.MYSQL_DATABASE_NAME as string,
        // 管理员账号
        user: process.env.MYSQL_DATABASE_USER as string,
        // 管理员密码
        password: process.env.MYSQL_DATABASE_PASSWORD as string,
        // 配置
        options: sequelizeOptions,
    },
    MONGOOSE_CONFIG: {},
    // CDN图片托管
    UPYUN_CONFIG: {
        operator: process.env.UPYUN_OPERATOR as string,
        secret: process.env.UPYUN_SECRET as string,
        bucket: process.env.UPYUN_BUCKET as string,
        domainName: process.env.UPYUN_DOMAIN as string,
        imgPath: process.env.UPYUN_IMAGE_PATH as string,
    },
    tokenSecret: process.env.ACCESS_TOKEN_SECRET as string,
    tokenExpiredTime: '12h',
}

// 生产模式下配置
const proConfig = {
    ...devConfig,
}

export default process.env.NODE_ENV === 'development' ? devConfig : proConfig
