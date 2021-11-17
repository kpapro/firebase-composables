import { getAuth } from 'firebase/auth'
import { getApp } from 'firebase/app'
import { computed, ref } from 'vue-demi'
import { createGlobalState } from "@vueuse/shared"

export default createGlobalState(() => {
  const app = getApp()
  const auth = getAuth(app)

  const user = ref(auth.currentUser)
  const isAuthenticated = computed(() => !!user.value)
  const authIsReady = ref(false)

  auth.onIdTokenChanged(authUser => {
    user.value = authUser
  })

  return {
    authIsReady,
    isAuthenticated,
    user
  }
})