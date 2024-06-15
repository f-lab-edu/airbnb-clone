'use client'
import { forwardRef } from 'react'
import { CarouselItemProps, CrouselProps } from '@/components/ui/Carousel/types'
import { useCarousel } from '@/components/ui/Carousel/useCarousel'
import RightArrow from '@/components/Icons/RightArrow'
import LeftArrow from '@/components/Icons/LeftArrow'

/**
 *
 * Carousel Component
 * @param slidesToShow  뷰포트에 보여지는 슬라이드 개수
 * @param slidesToScroll 한번에 스크롤 되는 슬라이드 개수
 * @constructor
 *
 */

function Carousel({ slidesToShow, slidesToScroll, children }: CrouselProps) {
    const childArray = Array.isArray(children) ? children : [children]
    const {
        currentTransitionX,
        carouselTrackRef,
        carouselItemRef,
        handleOnPrev,
        handleOnNext,
    } = useCarousel({
        slidesToShow,
        slidesToScroll,
        childArray,
    })

    return (
        <div className={'carousel-grid carousel_container relative flex-1'}>
            <div className={'area-carousel_container overflow-hidden'}>
                <ul
                    data-testid={'carousel_track'}
                    ref={carouselTrackRef}
                    className={
                        'grid grid-flow-col auto-cols-[minmax(68px,_1fr)] transition-transform duration-200'
                    }
                    style={{
                        transform: `translateX(-${currentTransitionX}px)`,
                    }}
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
                data-testid={'carousel_prev_button'}
            >
                <LeftArrow />
            </button>
            <button
                className={
                    'area-carousel_next_btn flex justify-center items-center w-7 h-7 rounded-full border border-1 border-gray-200'
                }
                onClick={handleOnNext}
                data-testid={'carousel_next_button'}
            >
                <RightArrow
                    name={'rightArrow'}
                    strokeWidth={1}
                    width={12}
                    height={12}
                />
            </button>
        </div>
    )
}

const CarouselItem = forwardRef<HTMLLIElement, CarouselItemProps>(
    ({ children }, ref) => {
        return (
            <li ref={ref} data-testid={'carousel_item'}>
                {children}
            </li>
        )
    }
)

CarouselItem.displayName = 'CarouselItem'
Carousel.Item = CarouselItem

export { Carousel }
