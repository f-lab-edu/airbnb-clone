import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchFeaturedListings } from '@/api/featuredListings'

interface UseFeaturedListingsOptions {
    limit?: number
    offset?: number
}

export const useFeaturedListings = ({
    limit = 10,
}: UseFeaturedListingsOptions = {}) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['mainPage', 'search'],
        queryFn: ({ pageParam = 0 }) =>
            fetchFeaturedListings({ offset: pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => {
            const offset = allPages.length * limit
            return offset < lastPage.total ? offset : undefined
        },
    })
}
