import { SVGProps } from 'react'

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
    name: string
    size?: number
    viewBox?: string
    width?: number
    height?: number
    children?: React.ReactNode
}
