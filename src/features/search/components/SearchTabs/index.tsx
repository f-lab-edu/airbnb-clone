'use client'
import SearchTabsWrapperLayout from '../../layouts/SearchTabsWrapperLayout'
import { format } from 'date-fns'
import { useSearchStore } from '@/store/useSearchStore'
import { SearchButton } from '../SearchButton'
import { SearchPopoverInput } from '../SearchPopoverInput'
import { LocationSelector } from '../LocationSelector'
import { DateSelector } from '../DateSelector'
import { GuestSelector } from '../GuestSelector'
import { createGuestSummary } from '@/lib/utils'
import { useCallback } from 'react'
import { useUrlSync } from '@/hooks/useUrlSync'

/**
 * SearchTabs
 * @constructor
 */

export const SearchTabs = () => {
    const { destination, from, to, guests } = useSearchStore()
    const { updateUrl } = useUrlSync()

    const handleSearchButtonClicked = useCallback(() => {
        updateUrl()
    }, [updateUrl])

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
                value={createGuestSummary(guests, '명')}
                contents={<GuestSelector />}
            />

            <SearchButton onSearchButtonClicked={handleSearchButtonClicked} />
        </SearchTabsWrapperLayout>
    )
}
