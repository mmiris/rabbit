import api from '.'
import { IGuessResult, IPagination } from '@/types/global'
import { IBanner, ICategory, IHot, IGuess } from '@/types/home'

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

export const getGuessesAPI = (pagination?: IPagination) => {
  return api<IGuessResult<IGuess>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: { ...pagination }
  })
}
