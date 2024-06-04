export type CarouselItemProps = {
    offset: number
    children: React.ReactNode
}

import { useState } from 'react'
export type CrouselProps = {
    children: React.ReactNode | React.ReactNode[]
    offset?: number
}
