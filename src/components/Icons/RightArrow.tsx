import * as React from 'react'
import type { SVGProps } from 'react'
const SvgRightArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 7 12"
        {...props}
    >
        <path
            stroke="#000"
            strokeWidth={2}
            d="m1.5 1.5 4.238 4.238a.375.375 0 0 1 0 .524L1.5 10.5"
        />
    </svg>
)
export default SvgRightArrow
