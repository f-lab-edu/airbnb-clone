'use client'
import { DropDown } from '@/components/ui/DropDown'
import Popover from '../../../../components/ui/Popover/Popover'
import PlaceInputComponent from '@/features/search/components/PlaceInputComponent'
import { BaseTabs } from '@/components/ui/BaseTabs'
import { RangeCalendar } from '@/features/search/components/RangeCalendar'
import SearchTabsWrapperLayout from '../../layouts/SearchTabsWrapperLayout'
import SearchInputLayout from '../../layouts/SearchInputLayout'
import { useSearchStore } from '../../store/searchStore'
import { format } from 'date-fns'

/**
 * SearchTabs
 * @constructor
 */

type TabValue = 'dates' | 'months' | 'flexible'

export const SearchTabs = () => {
    const { destination, from, to } = useSearchStore()

    return (
        <SearchTabsWrapperLayout>
            {/* ======== Place ================== */}
            <SearchInputLayout width="w-2/6">
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <label>여행지</label>
                            <input placeholder={'여행지 검색'} />
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
                            <label>체크인</label>
                            <input
                                placeholder={'날짜 추가'}
                                value={from ? format(from, 'M월dd일') : ''}
                            />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <BaseTabs<TabValue>>
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
                            <p>체크아웃</p>
                            <input
                                placeholder={'날짜 추가'}
                                value={to ? format(to, 'M월dd일') : ''}
                            />
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
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.5 10.5L15 15M6.5 12C7.22227 12 7.93747 11.8577 8.60476 11.5813C9.27205 11.3049 9.87837 10.8998 10.3891 10.3891C10.8998 9.87837 11.3049 9.27205 11.5813 8.60476C11.8577 7.93747 12 7.22227 12 6.5C12 5.77773 11.8577 5.06253 11.5813 4.39524C11.3049 3.72795 10.8998 3.12163 10.3891 2.61091C9.87837 2.10019 9.27205 1.69506 8.60476 1.41866C7.93747 1.14226 7.22227 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 7.95869 1.57946 9.35764 2.61091 10.3891C3.64236 11.4205 5.04131 12 6.5 12Z"
                            stroke="white"
                            strokeWidth={'2'}
                        />
                    </svg>
                </button>
            </div>
        </SearchTabsWrapperLayout>
    )
}
