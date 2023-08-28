import { create } from 'zustand'

interface LinkStore {
  active: string | null
  toggleActive: (by: string) => void
}

export const useLinkStore = create<LinkStore>()((set) => ({
  active: null,
  toggleActive: (by) => set(() => ({ active: by })),
}))

