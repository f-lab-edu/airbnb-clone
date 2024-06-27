'use client'
import React, { useContext, useMemo } from 'react'
import BaseTabsContext from './BaseTabsContext'
import {
    BaseTabsContentProps,
    BaseTabsProps,
    BaseTabsTriggerProps,
    BaseTabsListProps,
} from './BaseTabs.types'
import clsx from 'clsx'

//개선하고 싶은 부분 : BaseTabs에 제네릭으로 받은 T - value를 하위 컴포넌트에서 제한된 T 로 좁혀지게 사용하도록?;

const BaseTabs = <T extends string>(
    { children }: BaseTabsProps<T>,
    ref: React.Ref<HTMLDivElement>
) => {
    const [activeItem, setActiveItem] = React.useState('')
    return (
        <BaseTabsContext.Provider
            value={useMemo(() => ({ activeItem, setActiveItem }), [activeItem])}
        >
            {children}
        </BaseTabsContext.Provider>
    )
}

const BaseTabsTrigger = <T extends string>({
    value,
    children,
    activeClassName,
    ...props
}: BaseTabsTriggerProps<T>) => {
    const { activeItem, setActiveItem } = useContext(BaseTabsContext)
    const handleBaseTabsTrigger = () => {
        console.log('value', value, activeItem)
        if (value === activeItem) return
        setActiveItem(value)
    }
    return (
        <button
            {...props}
            className={clsx(activeItem === value && activeClassName)}
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

const BaseTabsContent = <T extends string>({
    value,
    children,
    ...props
}: BaseTabsContentProps<T>) => {
    const { activeItem } = useContext(BaseTabsContext)
    return activeItem === value ? <div {...props}>{children}</div> : null
}

BaseTabs.Trigger = BaseTabsTrigger
BaseTabs.List = BaseTabsList
BaseTabs.Content = BaseTabsContent

export { BaseTabsTrigger, BaseTabsList, BaseTabsContent, BaseTabs }
