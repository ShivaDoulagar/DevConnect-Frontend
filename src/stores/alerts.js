import { defineStore } from 'pinia'

let timeoutId = null
export const useAlertStore = defineStore('alert', {
  state: () => ({
    show: false,
    message: '',
    type: 'success', // success | error | info | warning
  }),

  actions: {
    showAlert(msg, type = 'success', duration = 3000) {
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      this.show = true
      this.message = msg
      this.type = type

      timeoutId = setTimeout(() => {
        this.clear()
      }, duration)
    },

    success(msg, duration = 3000) {
      this.showAlert(msg, 'success', duration)
    },

    error(msg, duration = 3000) {
      this.showAlert(msg, 'error', duration)
    },

    clear() {
      this.show = false
      this.message = ''
    },
  },
})
