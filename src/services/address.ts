import api from '.'
import { IAddress, IForm } from '@/types/address'

export const getAddressesAPI = () => {
  return api<IAddress[]>({
    method: 'GET',
    url: '/member/address'
  })
}

export const getAddressDetailAPI = (id: string) => {
  return api<IAddress>({
    method: 'GET',
    url: `/member/address/${id}`
  })
}

export const postAddressAPI = (form: IForm) => {
  return api({
    method: 'POST',
    url: '/member/address',
    data: form
  })
}

export const putAddressAPI = (id: string, form: IForm) => {
  return api({
    method: 'PUT',
    url: `/member/address/${id}`,
    data: form
  })
}

export const deleteAddressAPI = (id: string) => {
  return api({
    method: 'DELETE',
    url: `/member/address/${id}`
  })
}
