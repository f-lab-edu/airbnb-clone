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
    starRating: number
    image: string
    description: string
    originalPrice: number
    discountPrice: number
    discountType: DiscountType
    amenities: Amenity[]
    placeURL: string
}
export const Amenities = {
    BreakfastIncluded: 'breakfastIncluded',
    FreeParking: 'freeParking',
    PetFriendly: 'petFriendly',
    SaunaOrSteamRoom: 'saunaOrSteamRoom',
    InRoomKitchen: 'inRoomKitchen',
    PickupService: 'pickupService',
} as const

export type Amenity = (typeof Amenities)[keyof typeof Amenities]

export type DiscountType = '할인가' | '쿠폰할인'
export type SearchParams = {
    destination: string
    from: string
    to: string
    adults: number
    children: number
    infants: number
    pets: number
    starRating: string
}

export type QueryOptions = {
    limit?: number
    offset?: number
}
