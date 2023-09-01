import api from '.'
import { IInfo, ILogin } from '@/types/login'

export const loginAPI = (login: ILogin) => {
  return api<IInfo>({
    method: 'POST',
    url: '/login/wxMin',
    data: login
  })
}

export const loginQuickAPI = (phoneNumber: string) => {
  return api<IInfo>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: { phoneNumber }
  })
}
