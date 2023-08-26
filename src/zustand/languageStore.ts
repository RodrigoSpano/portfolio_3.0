import { create } from 'zustand'

interface langStore {
  language: string
  toggleLang: (by: string) => void
}

export const useLangStore = create<langStore>()((set) => ({
  language: 'en',
  toggleLang: (by) => set(() => ({ language: by })),
}))

