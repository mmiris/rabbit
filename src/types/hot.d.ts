export interface IHotResult {
  /**
   * 活动图片
   */
  bannerPicture: string
  /**
   * id信息
   */
  id: string
  /**
   * 子类选项集合
   */
  subTypes: ISubType[]
  /**
   * 活动标题
   */
  title: string
}

/**
 * 子类选项
 */
export interface ISubType {
  goodsItems: IGoodsItem
  /**
   * 子类选项id
   */
  id: string
  /**
   * 子类选项名称
   */
  title: string
}

export interface IGoodsItem {
  /**
   * 总数量
   */
  counts: number
  /**
   * 商品集合
   */
  items: IItem[]
  /**
   * 页码
   */
  page: number
  /**
   * 总页数
   */
  pages: number
  /**
   * 页容量
   */
  pageSize: number
}

/**
 * 商品项
 */
export interface IItem {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
