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
        <>
            <div className={'overflow-hidden gap-6'}>
                <div
                    className="carousel-track flex gap-10"
                    style={{
                        transform: `translateX(-${(currentSlide - 1) * 100}%)`,
                    }}
                >
                    {childArray.map((child, idx) => (
                        <Carousel.Item key={idx}>{child}</Carousel.Item>
                    ))}
                </div>
            </div>
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleNext}>next</button>
        </>
    )
}

const CarouselItem = ({ children }: CarouselItemProps) => {
    return <>{children}</>
}

Carousel.Item = CarouselItem

export { Carousel }
