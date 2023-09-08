import useProfileStore from '@/stores/profile'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const interceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
      console.log(options.url)
    }

    options.timeout = 10000

    options.header = {
      ...options.header,
      'source-client': 'miniapp'
    }

    const profileStore = useProfileStore()
    const token = profileStore.profile?.token

    if (token) {
      options.header.Authorization = token
    }
  }
}

uni.addInterceptor('request', interceptor)
uni.addInterceptor('uploadFile', interceptor)

interface Data<T> {
  code: number
  msg: string
  result: T
}

const api = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (200 <= res.statusCode && res.statusCode <= 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const profileStore = useProfileStore()
          profileStore.clearProfile()

          uni.navigateTo({ url: 'pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'error',
            title: (res.data as Data<T>).msg ?? '出现错误'
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'error',
          title: '网络错误'
        })
        reject(err)
      }
    })
  })
}

export default api
