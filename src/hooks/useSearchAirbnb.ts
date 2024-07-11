import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchSearch } from '@/api/search'

export const useSearchAirbnb = () => {
    return useSuspenseInfiniteQuery({
        queryKey: ['mainPage', 'search'],
        queryFn: fetchSearch,
        getNextPageParam: (lastPage) => {
            const { offset, limit, total } = lastPage
            const currentPage = offset / limit + 1
            return offset + limit < total ? currentPage + 1 : undefined
        },
        initialPageParam: 1,
    })
}
