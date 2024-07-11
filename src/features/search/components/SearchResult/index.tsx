'use client'

import React, { Suspense, useCallback } from 'react'
import Lottie from 'react-lottie'
import { useSearchAirbnb } from '@/hooks/useSearchAirbnb'
import { SearchResultList } from '@/features/search/components/SearchResultList'
import { Observer } from '@/components/Observer'
import loadMoreLoadingAnimation from '@/lotties/lottie_loading.json'

export function SearchResult() {
    const {
        data: searchResultList,
        isFetching,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
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
        <Suspense fallback={<div>waiting....</div>}>
            <Observer
                onIntersect={handleOnIntersect}
                loader={
                    isFetching || isFetchingNextPage || hasNextPage ? (
                        <Lottie
                            options={defaultOptions}
                            height={70}
                            width={200}
                        />
                    ) : null
                }
            >
                {searchResultList.pages.map((page) => (
                    <SearchResultList list={page} key={page.offset} />
                ))}
            </Observer>
        </Suspense>
    )
}
