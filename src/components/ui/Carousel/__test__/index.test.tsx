import { fireEvent, render, screen } from '@testing-library/react'
import Carousel from '@/components/ui/Carousel'
import {
    getDefaultSlidesToScroll,
    getDefaultSlidesToShow,
} from '@/components/ui/Carousel/carousel.util'
import { useCarousel } from '../useCarousel'

const extractNumber = (ele: HTMLElement) =>
    parseInt((ele.style.transform.match(/-?\d+/) || ['0'])[0])

describe('Carousel', () => {
    beforeAll(() => {
        // carouselItemRef and carouselTrackRef 모킹
        jest.spyOn(
            HTMLElement.prototype,
            'clientWidth',
            'get'
        ).mockImplementation(function (this: HTMLElement) {
            if (this.tagName === 'UL') return 600 // 트랙의 너비를 600px로 설정(=carouselTrackRef)
            if (this.tagName === 'LI') return 200 // 아이템 너비 200px로 설정(=carouselItemRef)
            return 0
        })
    })

    afterAll(() => {
        jest.restoreAllMocks()
    })

    const childArray = Array.from({ length: 10 }, (_, i) => (
        <div id={i.toString()} key={i}>
            {i}
        </div>
    ))
    it('아이템이 제일 왼쪽에 위치 하고 있을 때, 왼쪽 버튼을 누르면 더 이상 이동 하지 않는다.', () => {
        _t.render(<Carousel>{childArray}</Carousel>)

        const track = _t.screen.getByTestId('carousel_track')
        const prevButton = _t.screen.getByTestId('carousel_prev_button')

        expect(track).toHaveStyle('transform: translateX(-0px)')
        _t.fireEvent.click(prevButton)
        expect(track).toHaveStyle('transform: translateX(-0px)')
    })

    it('아이템이 제일 오른쪽에 위치 하고 있을 때, 오른쪽 버튼을 누르면 더 이상 이동하지 않는다.', () => {
        _t.render(<Carousel>{childArray}</Carousel>)
        const track = _t.screen.getByTestId('carousel_track')

        expect(track).toHaveStyle('transform: translateX(-0px)')
        const nextButton = _t.screen.getByTestId('carousel_next_button')

        const maxTranslateX = Math.abs(-1400)
        while (Math.abs(extractNumber(track)) < maxTranslateX) {
            _t.act(() => fireEvent.click(nextButton))
        }

        expect(Math.abs(extractNumber(track))).toBe(maxTranslateX)

        _t.act(() => fireEvent.click(nextButton))
        expect(Math.abs(extractNumber(track))).toBe(maxTranslateX)
    })
})

// 함수 테스트
describe('Function Test - defaultSlidesToShow ', () => {
    it('defaultSlidesToShow 값을 구할 때 슬라이드 너비 값이 0인 경우 에러가 나야 한다.', () => {
        expect(() => getDefaultSlidesToShow(0, 200)).toThrow(
            'zero division error'
        )
    })

    test('defaultSlidesToShow 값을 구할 때 뷰포트 슬라이드 너비 값이 0인 경우 에러가 나야한다.', () => {
        expect(() => getDefaultSlidesToShow(0, 200)).toThrow(
            'zero division error'
        )
    })
})

describe('Function Test - defaultSlidesToScroll', () => {
    it('스크롤 할 슬라이드 개수가 음수일 경우 에러를 낸다.', () => {
        expect(() => getDefaultSlidesToScroll(() => 0)).toThrow(
            'calculatedSlidesToShow must be greater than 0'
        )
    })

    it('뷰포트의 슬라이드 개수가 0 이하 일 경우 에러를 낸다.', () => {
        expect(() => getDefaultSlidesToScroll(() => 0)).toThrow(
            'calculatedSlidesToShow must be greater than 0'
        )
    })
})
