// children 을 직접 받는 컴포넌트를 만들 때는 chidlren 타입 제외하고 직접 children을 받는다.

export type BaseTabsProps = {
    defaultActiveItem?: string //TODO : T에서 중 한가지여야 함
    children: React.ReactNode
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>

export type BaseTabsTriggerProps = {
    value: string
    activeClassName?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type BaseTabsContentProps = {
    value: string
    activeClassName?: string
} & React.HTMLAttributes<HTMLDivElement>

export type BaseTabsListProps = Readonly<{ children: React.ReactNode }> &
    React.HTMLAttributes<HTMLDivElement>
