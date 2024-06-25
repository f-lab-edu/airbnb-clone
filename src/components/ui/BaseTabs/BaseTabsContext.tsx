'use client'
import { createContext, useContext } from 'react'

export type BaseTabsContextType = {
    activeItem: string
    setActiveItem: (item: string) => void
}

export const BaseTabsContext = createContext<BaseTabsContextType>({
    activeItem: '',
    setActiveItem: () => {},
})

//재사용을 위한 hook 내보내기
export const useBaseTabsContext = () => useContext(BaseTabsContext)

export default BaseTabsContext
