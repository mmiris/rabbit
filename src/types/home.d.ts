export interface IBanner {
  /**
   * 跳转链接
   */
  hrefUrl: string
  /**
   * id
   */
  id: string
  /**
   * banner链接
   */
  imgUrl: string
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number
}

export interface ICategory {
  /**
   * 展示图标
   */
  icon: string
  /**
   * id
   */
  id: string
  /**
   * 分类名称
   */
  name: string
}

export interface IHot {
  /**
   * 推荐说明
   */
  alt: string
  /**
   * id
   */
  id: string
  /**
   * 图片集合
   */
  pictures: string[]
  /**
   * 跳转地址
   */
  target: string
  /**
   * 推荐标题
   */
  title: string
  /**
   * 推荐类型
   */
  type: string
}

export interface IGuess {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: number
  /**
   * id
   */
  id: string
  /**
   * 商品名称
   */
  name: string
  /**
   * 商品已下单数量
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: number
}
