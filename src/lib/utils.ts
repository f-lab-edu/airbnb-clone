import { GuestState } from '@/store/types'
import { GUEST_TYPES, Guest } from '@/types/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

type GuestOptionId = keyof typeof GUEST_TYPES

const LABELS = {
    adults: '게스트',
    children: '게스트',
    infants: '유아',
    pets: '반려동물',
} as const

function formatGuestCount(
    type: GuestOptionId,
    count: number,
    unit: string,
    labels: typeof LABELS
): string {
    return count > 0 ? `${labels[type]} ${count}${unit}` : ''
}

function combineAdultsAndChildren(guests: GuestState): number {
    return (guests.adults || 0) + (guests.children || 0)
}

export function createGuestSummary(guests: GuestState, unit: string): string {
    if (Object.values(guests).every((count) => count === 0)) return ''

    const adultChildrenCount = combineAdultsAndChildren(guests)
    const parts = [
        formatGuestCount('adults', adultChildrenCount, unit, LABELS),
        formatGuestCount('infants', guests.infants || 0, unit, LABELS),
        formatGuestCount('pets', guests.pets || 0, unit, LABELS),
    ]

    return parts.filter(Boolean).join(', ')
}
