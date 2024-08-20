import { create } from 'zustand'

type SearchFilterStore = {
    selectedTab: string
    setSelectedTab: (selectedTab: string) => void
}

export const searchFilterStore = create<SearchFilterStore>((set) => ({
    selectedTab: '',
    setSelectedTab: (selectedTab: string) => set({ selectedTab }),
}))
