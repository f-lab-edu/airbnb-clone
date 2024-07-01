'use client'
import SearchTabsWrapperLayout from '../../layouts/SearchTabsWrapperLayout'
import { format } from 'date-fns'
import { useSearchStore } from '@/store/useSearchStore'
import { DateChooserTabs } from '@/features/search/components/DateChooserTabs'
import { SearchButton } from '../SearchButton'
import { LocationSearchContent } from '@/features/search/components/LocationSearchContent'
import { SearchPopoverInput } from '../SearchPopoverInput'

/**
 * SearchTabs
 * @constructor
 */

export const SearchTabs = () => {
    const { destination, from, to } = useSearchStore()

    return (
        <SearchTabsWrapperLayout>
            <SearchPopoverInput
                width="w-2/6"
                label="여행지"
                value={destination}
                placeholder="여행지 검색"
                contents={<LocationSearchContent />}
            />

            <SearchPopoverInput
                width="w-1/6"
                label="체크인"
                value={from ? format(from, 'M월dd일') : ''}
                placeholder="날짜 추가"
                contents={<DateChooserTabs />}
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
                contents={
                    <div className="popover">
                        <h3>Popover</h3>
                        <p>Popover content</p>
                    </div>
                }
            />

            <SearchButton />
        </SearchTabsWrapperLayout>
    )
}
