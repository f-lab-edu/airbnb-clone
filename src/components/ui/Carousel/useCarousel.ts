import { useCallback, useEffect, useRef, useState } from 'react'
import { ZERO } from '@/components/ui/Carousel/types'
import {
    getDefaultSlidesToShow,
    getDefaultSlidesToScroll,
    getGapStyle,
} from '@/components/ui/Carousel/carousel.util'

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
    const carouselTrackRef = useRef<HTMLUListElement>(null)
    const carouselItemRef = useRef<HTMLLIElement>(null)
    const individualSlideWidth = useRef<number>(ZERO)

    const [currentTransitionX, setCurrentTransitionX] = useState<number>(ZERO)
    const [calculatedSlidesToShow, setCalculatedSlidesToShow] =
        useState<number>(ZERO)
    const [calculatedSlidesToScroll, setCalculatedSlidesToScroll] =
        useState<number>(ZERO)

    useEffect(() => {
        const carouselTrack = carouselTrackRef.current
        const carouselItem = carouselItemRef.current

        if (carouselTrack && carouselItem) {
            individualSlideWidth.current =
                carouselItemRef.current.clientWidth + getGapStyle(carouselTrack)

            const defaultSlidesToShow = getDefaultSlidesToShow(
                carouselTrack.clientWidth,
                individualSlideWidth.current
            )
            const defaultSlidesToScroll = getDefaultSlidesToScroll(() =>
                getDefaultSlidesToShow(
                    carouselTrack.clientWidth,
                    individualSlideWidth.current
                )
            )
            setCalculatedSlidesToShow(slidesToShow || defaultSlidesToShow)
            setCalculatedSlidesToScroll(slidesToScroll || defaultSlidesToScroll)
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
            return Math.max(ZERO, nextPosition)
        })
    }, [calculatedSlidesToScroll])

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
