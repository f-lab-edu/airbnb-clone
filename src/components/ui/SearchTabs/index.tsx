'use client'
import { DropDown } from '@/components/ui/DropDown'
import Popover from '../Popover/Popover'
import PlaceInputComponent from '@/components/PlaceInputComponent'

/**
 * TODO :
 * - SearchTabs를 각각의 SearchTab으로 분리 후, SearchTabs로 묶어서 관리가 나을 수도 있겠다.
 * - DropDown컴포넌트 options로 제한 하는 방법 외 조합으로 다른 컴포넌트 자체로 DropDown 컨텐츠가
 *   되도록 다시 설계 후 SearchTab 적용하기
 *
 * @constructor
 */

export const SearchTabs = () => {
    return (
        <div
            className={
                'flex items-center h-16 border-gray-200 border shadow-md rounded-xl max-w-screen-md mx-auto'
            }
        >
            <div className={'flex items-center pl-4 w-2/6'}>
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <p>여행지</p>
                            <input placeholder={'여행지 검색'} />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <PlaceInputComponent />
                    </Popover.Content>
                </Popover>
            </div>
            <div className={'flex items-center pl-4 w-1/6'}>
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <p>체크인</p>
                            <input placeholder={'날짜 추가'} />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <div className="popover">
                            <h3>Popover</h3>
                            <p>Popover content</p>
                        </div>
                    </Popover.Content>
                </Popover>
            </div>
            <div className={'flex items-center pl-4 w-1/6'}>
                <Popover>
                    <Popover.Trigger>
                        <div className={'border-r border-r-gray-200'}>
                            <p>체크인</p>
                            <input placeholder={'날짜 추가'} />
                        </div>
                    </Popover.Trigger>
                    <Popover.Content>
                        <div className="popover">
                            <h3>Popover</h3>
                            <p>Popover content</p>
                        </div>
                    </Popover.Content>
                </Popover>
            </div>
            <div className={'flex items-center pl-4 w-2/6'}>
                <Popover>
                    <Popover.Trigger>
                        <div>
                            <p>여행자</p>
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
            </div>
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
        </div>
    )
}
