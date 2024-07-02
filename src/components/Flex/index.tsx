import React, { CSSProperties } from 'react'
import { clsx } from 'clsx'

interface FlexProps {
    align?: CSSProperties['alignItems']
    justify?: CSSProperties['justifyContent']
    direction?: CSSProperties['flexDirection']
    className?: string
    children: React.ReactNode
}
export const Flex = ({
    direction = 'row',
    justify = 'center',
    align = 'center',
    className,
    children,
    ...rest
}: FlexProps) => {
    const FlexDynamicStyle = clsx(`
        flex,
        items-${align},
        ${justify},
        flex-${direction},
        ${className ?? ''}
        `)
    return (
        <div className={FlexDynamicStyle} {...rest}>
            {children}
        </div>
    )
}
