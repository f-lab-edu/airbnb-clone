import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchSearch } from '@/api/search'
import { SearchParams } from '@/types/types'
import { AirbnbPartial } from '@/types/utils'

export const useSearchAirbnb = (searchParams: AirbnbPartial<SearchParams>) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['searchPage', 'results', { ...searchParams }],
        queryFn: ({ pageParam }) =>
            fetchSearch({ ...searchParams, offset: pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            const { offset, limit, total } = lastPage
            const nextPage = allPages.length + 1
            return offset + limit < total ? nextPage : undefined
        },
        initialPageParam: 1,
    })
}
