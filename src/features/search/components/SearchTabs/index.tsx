'use client'
import PlaceInputComponent from '@/features/search/components/PlaceInputComponent'
import { BaseTabs } from '@/components/ui/BaseTabs'
import { RangeCalendar } from '@/features/search/components/RangeCalendar'
import SearchTabsWrapperLayout from '../../layouts/SearchTabsWrapperLayout'
import SearchInputLayout from '../../layouts/SearchInputLayout'
import { format } from 'date-fns'
import { Search } from '@/components/Icons'
import { useSearchStore } from '@/store/useSearchStore'
import { Popover } from '@/components/ui/Popover/Popover'

/**
 * SearchTabs
 * @constructor
 */

export const SearchTabs = () => {
    const { destination, from, to } = useSearchStore()

    return (
        <SearchTabsWrapperLayout>
            {/* ======== Place ================== */}
            <SearchInputLayout width="w-2/6">
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <label>
                                여행지
                                <input
                                    type="text"
                                    placeholder={'여행지 검색'}
                                    value={destination}
                                />
                            </label>
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <PlaceInputComponent />
                    </Popover.Content>
                </Popover>
            </SearchInputLayout>
            {/* ======== CheckIn, CheckOut ======== */}
            <SearchInputLayout width="w-1/6">
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <label>
                                체크인
                                <input
                                    type="text"
                                    placeholder={'날짜 추가'}
                                    value={from ? format(from, 'M월dd일') : ''}
                                />
                            </label>
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <BaseTabs>
                            <BaseTabs.List
                                className={
                                    'grid grid-cols-auto-fit mx-auto bg-airbnb-neutral-300 px-4 py-2 rounded-3xl gap-x-8'
                                }
                            >
                                <BaseTabs.Trigger
                                    value="dates"
                                    className={'px-4 py-2'}
                                    activeClassName={
                                        'bg-airbnb-neutral-100 rounded-3xl px-2'
                                    }
                                >
                                    날짜지정
                                </BaseTabs.Trigger>
                                <BaseTabs.Trigger
                                    value="months"
                                    className={' px-4 py-2 gap-2'}
                                    activeClassName={
                                        'bg-airbnb-neutral-100 rounded-3xl px-2'
                                    }
                                >
                                    월단위
                                </BaseTabs.Trigger>
                                <BaseTabs.Trigger
                                    value="flexible"
                                    className={' px-4 py-2'}
                                    activeClassName={
                                        'bg-airbnb-neutral-100 rounded-3xl px-2'
                                    }
                                >
                                    유연한 일정
                                </BaseTabs.Trigger>
                            </BaseTabs.List>
                            {
                                <BaseTabs.Content value="dates">
                                    <RangeCalendar />
                                </BaseTabs.Content>
                            }
                            {
                                <BaseTabs.Content value="months">
                                    <h1>months</h1>
                                </BaseTabs.Content>
                            }
                            {
                                <BaseTabs.Content value="flexible">
                                    <h1>flexible</h1>
                                </BaseTabs.Content>
                            }
                        </BaseTabs>
                    </Popover.Content>
                </Popover>
            </SearchInputLayout>
            <SearchInputLayout width="w-2/6">
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <label>
                                체크아웃
                                <input
                                    type="text"
                                    placeholder={'날짜 추가'}
                                    value={to ? format(to, 'M월dd일') : ''}
                                />
                            </label>
                        </div>
                    </Popover.Trigger>
                </Popover>
            </SearchInputLayout>
            {/* ======== Number of Guests ======== */}
            <SearchInputLayout width="w-2/6">
                <Popover>
                    <Popover.Trigger>
                        <div>
                            <label>여행자</label>
                            <input placeholder={'게스트 추가'} />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <div className="popover">
                            <h3>Popover</h3>
                            <p>Popover content</p>
                        </div>
                    </Popover.Content>
                </Popover>
            </SearchInputLayout>
            <div>
                <button
                    className={
                        'flex justify-center items-center w-12 h-12 rounded-full bg-rose-600 mr-4 '
                    }
                >
                    <Search width={14} height={14} />
                </button>
            </div>
        </SearchTabsWrapperLayout>
    )
}
