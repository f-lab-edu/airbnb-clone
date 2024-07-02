'use client'
import SearchTabsWrapperLayout from '../../layouts/SearchTabsWrapperLayout'
import { format } from 'date-fns'
import { useSearchStore } from '@/store/useSearchStore'
import { SearchButton } from '../SearchButton'
import { SearchPopoverInput } from '../SearchPopoverInput'
import { GuestState } from '@/store/types'
import { GUEST_TYPES, Guest } from '@/types/types'
import { LocationSelector } from '../LocationSelector'
import { DateSelector } from '../DateSelector'
import { GuestSelector } from '../GuestSelector'

/**
 * SearchTabs
 * @constructor
 */

export const SearchTabs = () => {
    const { destination, from, to, guests } = useSearchStore()

    return (
        <SearchTabsWrapperLayout>
            <SearchPopoverInput
                width="w-2/6"
                label="여행지"
                value={destination}
                placeholder="여행지 검색"
                contents={<LocationSelector />}
            />

            <SearchPopoverInput
                width="w-1/6"
                label="체크인"
                value={from ? format(from, 'M월dd일') : ''}
                placeholder="날짜 추가"
                contents={<DateSelector />}
            />
            <SearchPopoverInput
                width="w-2/6"
                label="체크아웃"
                placeholder="날짜 추가"
                value={to ? format(to, 'M월dd일') : ''}
            />
            <SearchPopoverInput
                width="w-2/6"
                label="여행자"
                placeholder="게스트 추가"
                value={formatGuestCount(guests, '명')}
                contents={<GuestSelector />}
            />

            <SearchButton />
        </SearchTabsWrapperLayout>
    )
}

type GuestOptionId = keyof typeof GUEST_TYPES

function formatGuestCount(guests: GuestState, unit: string) {
    let displayResult = ''
    if (Object.keys(guests).every((key) => guests[key as GuestOptionId] === 0))
        return displayResult

    for (const [key, value] of Object.entries(guests)) {
        if (value === 0) continue
        if (key === Guest.adults || key === Guest.children) {
            const total = guests[Guest.adults] + guests[Guest.children]
            console.log('total', total, displayResult)
            displayResult = displayResult.includes('게스트')
                ? (displayResult += ``)
                : `게스트${total}${unit}`
        } else {
            displayResult += ` ${GUEST_TYPES[key as GuestOptionId].label} ${value} ${unit}`
        }
    }

    return displayResult
}
