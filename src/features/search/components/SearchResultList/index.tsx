import React from 'react'
import { AirbnbDTO, SearchResponse } from '@/types/types'
import { SearchResultCard } from '@/features/search/components/SearchResultCard'
import { ListContainer } from '@/components/ListContainer'

export function SearchResultList({ list }: Readonly<{ list: SearchResponse }>) {
    return (
        <ListContainer<AirbnbDTO>
            key={list.offset}
            className={'main-search-result-grid'}
            list={list.items}
            renderProps={(item) => (
                <SearchResultCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    rating={item.starRating}
                    image={item.image}
                />
            )}
        />
    )
}
