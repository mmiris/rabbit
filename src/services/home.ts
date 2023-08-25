import api from '.'
import { IBanner, ICategory, IHot } from '@/types/home'

export const getBannersAPI = (distributionSite = 1) => {
  return api<IBanner[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite
    }
  })
}

export const getCategoriesAPI = () => {
  return api<ICategory[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

export const getHotsAPI = () => {
  return api<IHot[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}
