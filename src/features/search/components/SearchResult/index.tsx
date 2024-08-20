'use client'

import React, { useCallback } from 'react'
import Lottie from 'react-lottie'
import { SearchResultList } from '@/features/search/components/SearchResultList'
import { Observer } from '@/components/Observer'
import { useFeaturedListings } from '@/hooks/useFeturedListings'
import { If } from '@/components/If'
import { defaultOptions } from '@/lib/lottieConfig'

export function SearchResult() {
    const {
        data: searchResultList,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
        isFetching,
    } = useFeaturedListings()

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
