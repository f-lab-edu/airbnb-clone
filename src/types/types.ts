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

export const GUEST_TYPES: {
    [k in GuestOptionId]: { label: string; ageRange: string }
} = {
    adults: { label: '성인', ageRange: '13세 이상' },
    children: { label: '어린이', ageRange: '2~12세' },
    infants: { label: '유아', ageRange: '2세 미만' },
    pets: { label: '반려동물', ageRange: '' },
}

export type GuestCountOperation = 'add' | 'subtract'

export const Guest = {
    adults: 'adults',
    children: 'children',
    infants: 'infants',
    pets: 'pets',
} as const
