export const getGapStyle = (element: HTMLElement) => {
    const computedStyle = getComputedStyle(element)
    let gapValue = computedStyle.gap || computedStyle.columnGap || '0px'
    if (gapValue === 'normal') gapValue = '0px'
    return parseInt(gapValue)
}

export const getDefaultSlidesToShow = (
    carouselTrackWidth: number,
    individualSlideWidth: number
): number => {
    if (individualSlideWidth === 0 || carouselTrackWidth === 0)
        throw new Error('zero division error')

    return Math.floor(carouselTrackWidth / individualSlideWidth)
}

export const getDefaultSlidesToScroll = (
    calculatedSlidesToShowFunction: () => number
) => {
    const SlideDeduction = -1
    return Math.min(
        calculatedSlidesToShowFunction() - SlideDeduction,
        calculatedSlidesToShowFunction()
    )
}
