import { ref } from 'vue'
import { defineStore } from 'pinia'
import { IInfo } from '@/types/login'

const useProfileStore = defineStore(
  'user',
  () => {
    const profile = ref<IInfo>()

    const setProfile = (val: IInfo) => (profile.value = val)
    const clearProfile = () => (profile.value = undefined)

    return {
      profile,
      setProfile,
      clearProfile
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, val) {
          uni.setStorageSync(key, val)
        }
      }
    }
  }
)

export default useProfileStore
