import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 50 50"
        {...props}
    >
        <path fill="none" d="M0 0h50v50H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={4}
            d="M9 25h32M25 9v32"
        />
    </svg>
)
export default SvgPlusIcon
