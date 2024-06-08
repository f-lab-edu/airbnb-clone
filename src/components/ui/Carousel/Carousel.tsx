'use client'

import { useState } from 'react'
import { CarouselItemProps, CrouselProps } from '@/components/ui/Carousel/types'

/**
 *
 * Carousel Component
 * @param offset  한 슬라이드에 표시할 아이템의 수
 * @param children
 * @constructor
 * TODO : prev, next 예외 처리, ui 개선  및 외부 에서 컨트롤 할 수 있는 요소 들로 변경 (width, height 등)
 */

const Carousel = ({ children }: CrouselProps) => {
    const [currentSlide, setCurrentSlide] = useState<number>(1)
    const childArray = Array.isArray(children) ? children : [children]

    const handleNext = () => {
        setCurrentSlide((prev) => prev + 1)
    }

    const handlePrev = () => {
        setCurrentSlide((prev) => prev - 1)
    }

    return (
        <div
            className={'carousel-grid carousel_container relative'}
            ref={carouselContainerRef}
        >
            <div className={'area-carousel_container overflow-hidden gap-10'}>
                <div
                    ref={carouselTrackRef}
                    className={'flex gap-6'}
                    style={{
                        display: 'grid',
                        gridAutoFlow: 'column',
                        // gridTemplateColumns: ' repeat(auto-fill, 47px)',
                        gridAutoColumns: '47px',
                        transform: `translateX(-${translateX}px)`,
                    }}
                >
                    {childArray.map((child, idx) => (
                        <Carousel.Item key={idx}>{child}</Carousel.Item>
                    ))}
                </div>
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

const CarouselItem = ({ children }: CarouselItemProps) => {
    return <div>{children}</div>
}

Carousel.Item = CarouselItem

export { Carousel }
