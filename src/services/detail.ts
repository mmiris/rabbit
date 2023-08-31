import api from '.'

import { IDetail } from '@/types/detail'

const getDetailAPI = (id: number) => {
  return api<IDetail>({
    url: `/goods`,
    method: 'GET',
    data: { id }
  })
}

export default getDetailAPI
