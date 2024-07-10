import { GuestOptionId } from '@/store/types'

export type CountInputProps = {
    onButtonClick: (
        guestType: GuestOptionId,
        e: React.MouseEvent<HTMLButtonElement>
    ) => void
    count: number
    guestType: GuestOptionId
    minusDisabled: boolean
    plusDisabled: boolean
}

export const GUEST_TYPES = {
    adults: { label: '성인', ageRange: '13세 이상' },
    children: { label: '어린이', ageRange: '2~12세' },
    infants: { label: '유아', ageRange: '2세 미만' },
    pets: { label: '반려동물', ageRange: '' },
} as const

export type GuestCountOperation = 'add' | 'subtract'

export const Guest = {
    adults: 'adults',
    children: 'children',
    infants: 'infants',
    pets: 'pets',
} as const

export type RoomType = 'AllTypes' | 'Room' | 'EntirePlace'
export type PropertyType = 'House' | 'Apartment' | 'GuestHouse' | 'Hotel'
// 편의시설
export interface Amenities {
    waterfront?: boolean // 해변
    wifi?: boolean // 와이파이
    washer?: boolean // 세탁기
    airConditioning?: boolean // 에어컨
    kitchen?: boolean // 주방
    freeParking?: boolean // 무료 주차
    essentials?: boolean // 필수품목
    dryer?: boolean // 건조기
    heating?: boolean // 난방
    dedicatedWorkspace?: boolean // 전용 작업 공간
    tv?: boolean // TV
    hairDryer?: boolean // 헤어드라이어
    iron?: boolean // 다리미
}

// 가격 범위
interface PriceRange {
    min?: number
    max?: number
}

// 침실, 침대, 욕실 수
interface RoomCount {
    bedrooms?: number
    beds?: number
    bathrooms?: number
}

export interface SearchResponse {
    items: AirbnbDTO[]
    total: number
    offset: number
    limit: number
}
export interface AirbnbDTO {
    id: number
    name: string
    price: number
    rating: number
    reviews: number
    location: string
    images: string[]
    propertyType: PropertyType
    roomType: RoomType
    amenities: Amenities
    priceRange: PriceRange
    roomCount: RoomCount
}
