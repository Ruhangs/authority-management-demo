import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive(localStorage.getItem('userInfo') || '')
  const token = ref(localStorage.getItem('token'))
  function addUser(data) {
    token.value = data.token
    // userInfo.value = data
    localStorage.setItem('userInfo', JSON.stringify(data) )
    localStorage.setItem('token', encodeURIComponent(JSON.stringify(data.token)))
  }

  return { userInfo, addUser }
})
