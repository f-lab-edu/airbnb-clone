'use client'
// children 을 직접 받는 컴포넌트를 만들 때는 chidlren 타입 제외하고 직접 children을 받는다.

export type BaseTabsProps<T> = {
    defaultActiveItem?: string //TODO : T에서 중 한가지여야 함
    children: React.ReactNode | React.ReactNode[]
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export type CommonBaseTabsProps<T extends string> = Readonly<{
    value: T
    children: React.ReactNode
}>

export type BaseTabsTriggerProps<T extends string> = CommonBaseTabsProps<T> &
    React.ButtonHTMLAttributes<HTMLButtonElement> & { activeClassName?: string }

export type BaseTabsContentProps<T extends string> = CommonBaseTabsProps<T> &
    React.HTMLAttributes<HTMLDivElement>

export type BaseTabsListProps = Readonly<{ children: React.ReactNode }> &
    React.HTMLAttributes<HTMLDivElement>
