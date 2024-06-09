import { useCallback, useEffect, useRef, useState } from 'react'
import { DEFAULT_OFFSET } from '@/components/ui/Carousel/types'

type useCarouselProp = {
    childArray: React.ReactNode[]
    slidesToShow?: number
    slidesToScroll?: number
}
export const useCarousel = ({
    slidesToShow,
    slidesToScroll,
    childArray,
}: useCarouselProp) => {
    const [currentTransitionX, setCurrentTransitionX] = useState<number>(0)
    const [calculatedSlidesToShow, setCalculatedSlidesToShow] =
        useState<number>(0)
    const [calculatedSlidesToScroll, setCalculatedSlidesToScroll] =
        useState<number>(0)

    const carouselTrackRef = useRef<HTMLUListElement>(null)
    const carouselItemRef = useRef<HTMLLIElement>(null)
    const individualSlideWidth = useRef<number>(0)

    useEffect(() => {
        if (carouselTrackRef.current && carouselItemRef.current) {
            const carouselTrackWidth = carouselTrackRef.current.clientWidth
            const computedStyle = getComputedStyle(carouselTrackRef.current)
            let gapValue = computedStyle.gap || computedStyle.columnGap || '0px'

            if (gapValue === 'normal') gapValue = '0px'
            individualSlideWidth.current =
                carouselItemRef.current.clientWidth + parseInt(gapValue)

            const calculatedSlidesToShow =
                slidesToShow ||
                Math.floor(carouselTrackWidth / individualSlideWidth.current)

            const getDefaultSlidesToScroll =
                calculatedSlidesToShow > 2
                    ? calculatedSlidesToShow - 1
                    : calculatedSlidesToShow

            const calculatedSlidesToScroll =
                slidesToScroll || getDefaultSlidesToScroll

            setCalculatedSlidesToShow(calculatedSlidesToShow)
            setCalculatedSlidesToScroll(calculatedSlidesToScroll)
        }
    }, [slidesToScroll, slidesToShow, currentTransitionX])

    const handleOnPrev = useCallback(() => {
        if (!carouselTrackRef.current) {
            console.warn('carouselTrackRef is not defined')
            return
        }

        setCurrentTransitionX((prev) => {
            const nextPosition =
                prev - calculatedSlidesToScroll * individualSlideWidth.current
            return Math.max(0, nextPosition)
        })
    }, [calculatedSlidesToShow])

    const handleOnNext = useCallback(() => {
        if (!carouselTrackRef.current) {
            console.warn('carouselTrackRef is not defined')
            return
        }

        const maxScrollPosition =
            childArray.length * individualSlideWidth.current -
            carouselTrackRef.current.clientWidth

        setCurrentTransitionX((prev) => {
            const nextPosition =
                prev + calculatedSlidesToScroll * individualSlideWidth.current
            return Math.min(nextPosition, maxScrollPosition)
        })
    }, [calculatedSlidesToScroll, childArray.length])

    return {
        handleOnPrev,
        handleOnNext,
        carouselTrackRef,
        carouselItemRef,
        currentTransitionX,
        calculatedSlidesToShow,
        calculatedSlidesToScroll,
    }
}
