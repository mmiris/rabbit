import api from '.'
import { IProfile, IPutProfile } from '@/types/profile'

export const getProfileAPI = () => {
  return api<IProfile>({
    url: '/member/profile',
    method: 'GET'
  })
}

export const putProfileAPI = (putProfile: IPutProfile) => {
  return api<IProfile>({
    url: '/member/profile',
    method: 'PUT',
    data: putProfile
  })
}
