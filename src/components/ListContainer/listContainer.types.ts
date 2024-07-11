import React from 'react'

export type ListContainerProps<T> = {
    list: T[]
    renderProps: (item: T) => React.ReactNode
    className?: string
}
