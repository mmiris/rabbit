import { IBaseProfile } from './global'

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
  birthday: null | string
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string
  /**
   * 性别，男、女、未知
   */
  gender: null | EGender
  /**
   * 职业
   */
  profession?: null | string
}

/**
 * 个人信息(PUT)
 */
export interface IPutProfile {
  /**
   * 昵称
   */
  nickname?: null | string
  /**
   * 生日 YYYY-MM-DD
   */
  birthday?: null | string
  /**
   * 性别，男、女、未知
   */
  gender?: EGender
  /**
   * 省份编码
   */
  provinceCode?: null | string
  /**
   * 城市编码
   */
  cityCode?: null | string
  /**
   * 区/县编码
   */
  countyCode?: null | string
  /**
   * 职业
   */
  profession?: null | string
}
