import { SearchResponse } from '@/types/types'

export const fetchSearch = async ({
    pageParam,
}: {
    pageParam: number
}): Promise<SearchResponse> => {
    const limit = 10
    const offset = limit * (pageParam - 1) < 0 ? 0 : limit * (pageParam - 1)
    const response = await fetch(
        `/api/v1/search?offset=${offset}&limit=${limit}`
    )
    return await response.json()
}
