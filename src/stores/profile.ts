import { ref } from 'vue'
import { defineStore } from 'pinia'

const useProfileStore = defineStore(
  'user',
  () => {
    const profile = ref()

    const setProfile = (val: any) => (profile.value = val)
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
