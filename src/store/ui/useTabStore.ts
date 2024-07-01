import { create } from 'zustand'

type TabStore = {
    selectedTab: string
    setSelectedTab: (selectedTab: string) => void
}

export const useTabStore = create<TabStore>((set) => ({
    selectedTab: '',
    setSelectedTab: (selectedTab: string) => set({ selectedTab }),
}))
