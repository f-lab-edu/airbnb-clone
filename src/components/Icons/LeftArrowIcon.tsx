import * as React from 'react'
import type { SVGProps } from 'react'
const SvgLeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
            display: 'block',
            fill: 'none',
            height: 12,
            width: 12,
            stroke: 'currentcolor',
            strokeWidth: 5.33333,
            overflow: 'visible',
        }}
        viewBox="0 0 32 32"
        {...props}
    >
        <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" />
    </svg>
)
export default SvgLeftArrowIcon
