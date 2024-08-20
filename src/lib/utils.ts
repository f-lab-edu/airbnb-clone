import { GuestState } from '@/store/types'
import { GUEST_TYPES } from '@/types/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface QueryParams {
    [key: string]: string
}
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

/**
 * Object.keys(object).map(key) 에서 key 가 항상 string 으로 추론 되는 부분을 개선 하는 wrapper 함수
 * key 에 대한 타입이 추론 된다.
 * @param object
 */
export function objectKeys<T extends Object>(object: T): (keyof T)[] {
    return Object.keys(object) as (keyof T)[]
}
/**
 * URLSearchParams를 객체로 변환하는 함수
 * @param searchParams
 */
export function parseQueryParams(searchParams: URLSearchParams) {
    const paramsArray = Array.from(searchParams.entries())
    return paramsArray.reduce((acc, [key, value]) => {
        acc[key] = value
        return acc
    }, {} as QueryParams)
}
