import * as React from 'react'
import type { SVGProps } from 'react'
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        {...props}
    >
        <path
            fill="#222"
            d="M6.548.457a.5.5 0 0 1 .904 0L9.173 4.1a.5.5 0 0 0 .389.283l3.997.51a.5.5 0 0 1 .279.86l-2.933 2.763a.5.5 0 0 0-.149.457l.75 3.96a.5.5 0 0 1-.732.53L7.24 11.529a.5.5 0 0 0-.48 0l-3.534 1.935a.5.5 0 0 1-.731-.53l.749-3.96a.5.5 0 0 0-.149-.457L.162 5.754a.5.5 0 0 1 .28-.86l3.996-.511a.5.5 0 0 0 .389-.283z"
        />
    </svg>
)
export default SvgStar
