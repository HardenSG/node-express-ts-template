export const ROUTER_WHITE_LIST = ['genToken'].map((v) => `/api/${v}`)

export enum CodeDictionary {
    SUCCESS = 0,
    PARAMS_ERROR = 1,
    EXPIRES_LOGIN,
    JWT_ERROR_REQUIRED = 400,
    JWT_ERROR_EXPIRED = 401,
    COMMON_ERROR = 500,
}

export const isDev = () => process.env.NODE_ENV === 'development'
