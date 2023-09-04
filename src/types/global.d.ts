export interface IPagination {
  page: number
  pageSize: number
}

/**
 * 返回数据
 */
export interface IGuessResult<T> {
  /**
   * 总条数
   */
  counts: number
  /**
   * 当前页数据
   */
  items: T[]
  /**
   * 当前页数
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 每页条数
   */
  pageSize: number
}

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
  nickname: null | string
}
