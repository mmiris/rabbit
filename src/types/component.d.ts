/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import GenSwiper from '@/components/GenSwiper.vue'
import GenGuess from '@/components/GenGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    GenSwiper: typeof GenSwiper
    GenGuess: typeof GenGuess
  }
}

export type TGuessInstance = InstanceType<typeof GenGuess>
