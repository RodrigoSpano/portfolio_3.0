import { create } from 'zustand'

interface ThemeState {
  dark: boolean
  toggleDark: (by: boolean) => void
}

export const useThemeStore = create<ThemeState>()((set) => ({
  dark: false,
  toggleDark: (by) => set(() => ({ dark: by })),
}))

