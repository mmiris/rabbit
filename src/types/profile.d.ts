/**
 * 用户公共信息
 */
export interface IBaseProfile {
  /**
   * 账号名称
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 用户Id
   */
  id: string
  /**
   * 昵称
   */
  nickname: string
}

export enum EGender {
  male = '男',
  female = '女'
}

/**
 * 个人信息（GET）
 */
export interface IProfile extends IBaseProfile {
  /**
   * 生日
   */
  birthday: string
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string
  /**
   * 性别，男、女、未知
   */
  gender: EGender
  /**
   * 职业
   */
  profession?: string
}

/**
 * 个人信息(PUT)
 */
export interface IPutProfile {
  /**
   * 昵称
   */
  nickname?: string
  /**
   * 生日 YYYY-MM-DD
   */
  birthday?: string
  /**
   * 性别，男、女、未知
   */
  gender?: EGender
  /**
   * 省份编码
   */
  provinceCode?: string
  /**
   * 城市编码
   */
  cityCode?: string
  /**
   * 区/县编码
   */
  countyCode?: string
  /**
   * 职业
   */
  profession?: string
}
