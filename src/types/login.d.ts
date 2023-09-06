import { IBaseProfile } from './profile'

export interface ILogin {
  code: string
  encryptedData?: string
  iv?: string
}

/**
 * 用户信息
 */
export interface IInfo extends IBaseProfile {
  /**
   * 用户手机号
   */
  mobile: string
  /**
   * 用于后续接口调用的token，有效期三天
   */
  token: string
}
