'use client'

import React, { Suspense } from 'react'
import { SearchResultCard } from '@/features/search/components/SearchResultCard'
import { useSearchAirbnb } from '@/hooks/useSearchAirbnb'

export function SearchResult() {
    const {
        data: searchResultList,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useSearchAirbnb()

    const conditionalLoadMoreText = () => {
        if (isFetchingNextPage) return 'loading...'
        if (hasNextPage) return 'more'
        return 'no more'
    }
    return (
        <Suspense fallback={<div>waiting....</div>}>
            {searchResultList?.pages?.map((page) => (
                <div key={page.offset} className={'main-search-result-grid'}>
                    {page.items.map((item) => (
                        <SearchResultCard
                            key={item.id}
                            images={item.images}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            ))}
            <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
            >
                {conditionalLoadMoreText()}
            </button>
        </Suspense>
    )
}
