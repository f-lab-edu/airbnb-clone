import React from 'react'
import { ListContainerProps } from '@/components/ListContainer/listContainer.types'

export function ListContainer<T>({
    list,
    renderProps,
    className,
    ...props
}: Readonly<ListContainerProps<T>>) {
    return (
        <div className={className} {...props}>
            {list?.map((item, index) => (
                <React.Fragment key={`${index + 1}_item`}>
                    {renderProps(item)}
                </React.Fragment>
            ))}
        </div>
    )
}
