import { If } from '@/components/If'
import { Observer } from '@/components/Observer'
import { SearchResultList } from '@/features/search/components/SearchResultList'
import { useSearchAirbnb } from '@/hooks/useSearchAirbnb'
import { defaultOptions } from '@/lib/lottieConfig'
import { parseQueryParams } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import Lottie from 'react-lottie'

export function SearchResult() {
    const searchParams = useSearchParams()
    // url 읽고 검색 결과를 보여주는 페이지
    const {
        data: searchResultList,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
        isFetching,
    } = useSearchAirbnb(parseQueryParams(searchParams))

    const handleOnIntersect = useCallback(
        (entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && !isFetchingNextPage && hasNextPage) {
                fetchNextPage()
            }
        },
        [isFetchingNextPage, hasNextPage, fetchNextPage]
    )

    return (
        <Observer
            onIntersect={handleOnIntersect}
            loader={
                <If condition={isFetching && hasNextPage}>
                    <div className={'m-auto w-36'}>
                        <Lottie options={defaultOptions} />
                    </div>
                </If>
            }
        >
            {searchResultList.pages.map((page) => (
                <SearchResultList list={page} key={page.offset} />
            ))}
        </Observer>
    )
}
