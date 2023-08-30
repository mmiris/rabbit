import api from '.'

import { IPagination } from '@/types/global'
import { IHotResult } from '@/types/hot'

export const getHotsAPI = (url: string, query?: IPagination & { subType: string }) => {
  return api<IHotResult>({
    method: 'GET',
    url,
    data: query
  })
}
