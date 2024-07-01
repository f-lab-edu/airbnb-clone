'use client'
import React from 'react'
import {
    BaseTabsContentProps,
    BaseTabsProps,
    BaseTabsTriggerProps,
    BaseTabsListProps,
} from './BaseTabs.types'
import clsx from 'clsx'
import { useTabStore } from '@/store/ui/useTabStore'

//개선하고 싶은 부분 : BaseTabs에 제네릭으로 받은 T - value를 하위 컴포넌트에서 제한된 T 로 좁혀지게 사용하도록?;

const BaseTabs = (
    { children }: BaseTabsProps,
    ref: React.Ref<HTMLDivElement>
) => {
    return <>{children}</>
}

const BaseTabsTrigger = ({
    value,
    children,
    activeClassName,
    ...props
}: BaseTabsTriggerProps) => {
    const { selectedTab, setSelectedTab } = useTabStore()
    const handleBaseTabsTrigger = () => {
        if (value === selectedTab) return
        setSelectedTab(value)
    }
    return (
        <button
            {...props}
            className={clsx(selectedTab === value && activeClassName)}
            onClick={handleBaseTabsTrigger}
        >
            {children}
        </button>
    )
}

const BaseTabsList = ({ children, ...props }: BaseTabsListProps) => {
    return (
        <div className="grid grid-cols-card-grid" {...props}>
            {children}
        </div>
    )
}

const BaseTabsContent = ({
    value,
    children,
    ...props
}: BaseTabsContentProps) => {
    const { selectedTab } = useTabStore()
    return selectedTab === value ? <div {...props}>{children}</div> : null
}

BaseTabs.Trigger = BaseTabsTrigger
BaseTabs.List = BaseTabsList
BaseTabs.Content = BaseTabsContent

export { BaseTabsTrigger, BaseTabsList, BaseTabsContent, BaseTabs }
