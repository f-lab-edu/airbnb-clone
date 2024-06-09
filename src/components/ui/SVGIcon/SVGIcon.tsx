import { SVGProps } from 'react'
import { SVGIconProps } from '@/components/ui/SVGIcon/types'

export const SVGIcon = ({
    name,
    width,
    height,
    size,
    viewBox,
    children,
    ...props
}: SVGIconProps) => {
    return (
        <svg
            xmlns={'https://www.w3.org/2000/svg'}
            viewBox={viewBox || '0 0 24 24'}
            width={size || width || 24}
            height={size || height || 24}
            {...props}
        >
            {children}
        </svg>
    )
}
