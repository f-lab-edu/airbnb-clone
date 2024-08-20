import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchSearch } from '@/api/search'

export const useSearchAirbnb = (qs: any) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['mainPage', 'search'],
        queryFn: ({ pageParam }) =>
            qs ? fetchSearch({ ...qs, pageParam }) : fetchSearch({ pageParam }),
        getNextPageParam: (lastPage, allPages) => {
            const { offset, limit, total, items } = lastPage
            console.log('lastPage', lastPage)
            const nextPage = allPages.length + 1
            return offset + limit < total ? nextPage : undefined
        },
        initialPageParam: 1,
    })
}
