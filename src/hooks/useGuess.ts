import { ref } from 'vue'
import { TGuessInstance } from '@/types/component'

const guessRef = ref<TGuessInstance>()

const onScrollToLower = () => {
  guessRef.value.getGuesses()
}

const useGuess = () => {
  return { guessRef, onScrollToLower }
}

export default useGuess
