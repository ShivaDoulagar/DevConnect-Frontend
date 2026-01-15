import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode' // Changed to named import

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
  }),

  getters: {
    isTokenValid: (state) => {
      if (!state.token) return false
      try {
        const decoded = jwtDecode(state.token)
        const currentTime = Date.now() / 1000 // JWT exp is in seconds
        return decoded.exp > currentTime
      } catch (error) {
        console.error('Invalid token:', error)
        return false
      }
    },
  },

  actions: {
    login(token) {
      this.token = token
      this.isAuthenticated = true
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
    },
  },
})
