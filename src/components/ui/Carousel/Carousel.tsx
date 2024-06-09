'use client'
import {
    forwardRef,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import {
    CarouselItemProps,
    CrouselProps,
    DEFAULT_OFFSET,
} from '@/components/ui/Carousel/types'

/**
 *
 * Carousel Component
 * @param slidesToShow  뷰포트에 보여지는 슬라이드 개수
 * @param slidesToScroll 한번에 스크롤 되는 슬라이드 개수
 * @constructor
 *
 */

const Carousel = ({ slidesToShow, slidesToScroll, children }: CrouselProps) => {
    const childArray = Array.isArray(children) ? children : [children]
    const [firstVisibleSlideIndex, setFirstVisibleSlideIndex] =
        useState<number>(DEFAULT_OFFSET)

    const [currentTransitionX, setCurrentTransitionX] = useState<number>(0)

    const carouselTrackRef = useRef<HTMLUListElement>(null)
    const slideDisplayInfo = useRef<{
        slidesToShow: number
        slidesToScroll: number
    }>({ slidesToShow: -1, slidesToScroll: -1 })

    const individualSlideWidthRef = useRef<number>(0)
    const carouselItemRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (carouselTrackRef.current && carouselItemRef.current) {
            const carouselTrackWidth = carouselTrackRef.current.clientWidth
            const computedStyle = getComputedStyle(carouselTrackRef.current)
            let gapValue = computedStyle.gap || computedStyle.columnGap || '0px'

            if (gapValue === 'normal') gapValue = '0px'

            individualSlideWidthRef.current =
                carouselItemRef.current.clientWidth + parseInt(gapValue)
            slideDisplayInfo.current.slidesToShow =
                slidesToShow ||
                Math.floor(carouselTrackWidth / individualSlideWidthRef.current)

            slideDisplayInfo.current.slidesToScroll =
                slideDisplayInfo.current.slidesToShow > 2
                    ? slideDisplayInfo.current.slidesToShow - 1
                    : slideDisplayInfo.current.slidesToShow
        }
    }, [firstVisibleSlideIndex, slidesToScroll, slidesToShow])

    const handleOnPrev = useCallback(() => {
        if (carouselTrackRef.current) {
            const currenX = Math.abs(
                carouselTrackRef.current.getBoundingClientRect().x
            )
            const nextPosition =
                slideDisplayInfo.current.slidesToScroll *
                individualSlideWidthRef.current

            // setCurrentTransitionX((prev) => Math.max(0, prev - nextPosition))
            const translateX = Math.max(0, currenX - nextPosition)
            carouselTrackRef.current.style.transform = `translateX(-${translateX}px)`
        }
    }, [])

    const handleOnNext = useCallback(() => {
        if (carouselTrackRef.current) {
            const currentX = Math.abs(
                carouselTrackRef.current.getBoundingClientRect().x
            )
            const maxScrollPosition =
                childArray.length * individualSlideWidthRef.current -
                carouselTrackRef.current.clientWidth
            const nextPosition =
                currentX +
                slideDisplayInfo.current.slidesToScroll *
                    individualSlideWidthRef.current
            const nextTranslateX = Math.min(nextPosition, maxScrollPosition)
            carouselTrackRef.current.style.transform = `translateX(-${nextTranslateX}px)`
        }
    }, [])

    return (
        <div className={'carousel-grid carousel_container relative flex-1'}>
            <div className={'area-carousel_container overflow-hidden'}>
                <ul
                    ref={carouselTrackRef}
                    className={
                        'grid grid-flow-col auto-cols-[minmax(200px,_1fr)] transition-transform duration-200'
                    }
                >
                    {childArray.map((child, idx) => (
                        <Carousel.Item key={idx} ref={carouselItemRef}>
                            {child}
                        </Carousel.Item>
                    ))}
                </ul>
            </div>
            <button
                className={
                    'area-carousel_prev_btn flex justify-center items-center w-7 h-7 rounded-full border border-1 border-gray-20'
                }
                onClick={handleOnPrev}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="12px"
                    height="12px"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                >
                    <path
                        fill="none"
                        d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                        stroke="black"
                        strokeWidth="5"
                    ></path>
                </svg>
            </button>
            <button
                className={
                    'area-carousel_next_btn flex justify-center items-center w-7 h-7 rounded-full border border-1 border-gray-200'
                }
                onClick={handleOnNext}
            >
                <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.5 1.5L8.7375 5.7375C8.80621 5.8076 8.8447 5.90184 8.8447 6C8.8447 6.09816 8.80621 6.1924 8.7375 6.2625L4.5 10.5"
                        stroke="black"
                        strokeWidth="2"
                    />
                </svg>
            </button>
        </div>
    )
}

const CarouselItem = forwardRef<HTMLLIElement, CarouselItemProps>(
    ({ children }, ref) => {
        return <li ref={ref}>{children}</li>
    }
)

CarouselItem.displayName = 'CarouselItem'

Carousel.Item = CarouselItem

export { Carousel }
