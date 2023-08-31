import api from '.'
import { ICategory } from '@/types/category'

const getCategoriesAPI = () => {
  return api<ICategory[]>({
    method: 'GET',
    url: '/category/top'
  })
}

export default getCategoriesAPI
