import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isAuthModalOpen: false,
  }),
  actions: {
    open() {
      this.isAuthModalOpen = true
    },
    close() {
      this.isAuthModalOpen = false
    },
    toggleModal() {
      this.isAuthModalOpen = !this.isAuthModalOpen
    },
  },
})
