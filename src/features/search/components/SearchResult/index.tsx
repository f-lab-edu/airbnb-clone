'use client'

import React, { useCallback } from 'react'
import Lottie from 'react-lottie'
import { useSearchAirbnb } from '@/hooks/useSearchAirbnb'
import { SearchResultList } from '@/features/search/components/SearchResultList'
import { Observer } from '@/components/Observer'
import loadMoreLoadingAnimation from '@/lotties/lottie_loading.json'

export function SearchResult() {
    const {
        data: searchResultList,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
        isFetching,
    } = useSearchAirbnb()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadMoreLoadingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
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

function If({
    condition,
    children,
}: Readonly<{ condition: boolean; children: React.ReactNode }>) {
    if (condition) {
        return <>{children}</>
    }
    return <></>
}
