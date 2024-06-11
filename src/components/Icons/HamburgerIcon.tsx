import React from 'react'
import { SVGIcon, SVGIconProps } from '../ui/SVGIcon'

export const HamburgerIcon = (props: SVGIconProps) => {
    return (
        <SVGIcon viewBox="0 0 17 17" {...props}>
            <path
                d="M1.01996 8.5H15.02M1.01996 12.5H15.02M1.01996 4.5H15.02"
                stroke="#222222"
                strokeWidth="1.5"
            />
        </SVGIcon>
    )
}
