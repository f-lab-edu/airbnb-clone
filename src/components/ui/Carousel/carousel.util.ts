import { SLIDE_CONFIG } from '@/components/ui/Carousel/types'

export const getDefaultSlidesToShow = (
    carouselTrackWidth: number,
    individualSlideWidth: number
): number => {
    if (individualSlideWidth === 0 || carouselTrackWidth === 0) {
        throw new Error('zero division error')
    }

    return Math.floor(carouselTrackWidth / individualSlideWidth)
}

export const getDefaultSlidesToScroll = (
    calculatedSlidesToShowFunction: () => number,
    slideDeduction = SLIDE_CONFIG.defaultSlideDeduction
) => {
    const slidesToShow = calculatedSlidesToShowFunction()
    if (slidesToShow <= 0) {
        throw new Error('calculatedSlidesToShow must be greater than 0')
    }
    return Math.min(slidesToShow - slideDeduction, slidesToShow)
}
