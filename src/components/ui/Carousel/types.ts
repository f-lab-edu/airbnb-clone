export type CarouselItemProps = {
    children: React.ReactNode
}

export type CrouselProps = {
    children: React.ReactNode | React.ReactNode[]
    slidesToScroll?: number
    slidesToShow?: number
}

export const DEFAULT_OFFSET = 1
export const ZERO = 0
