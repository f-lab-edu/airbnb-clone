import { SearchResponse } from '@/types/types'

export async function fetchFeaturedListings({
    limit = 10,
    offset = 0,
}: {
    limit?: number
    offset?: number
}): Promise<SearchResponse> {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/listings/featured?limit=${limit}&offset=${offset}`
    )
    console.log('response', response)
    if (!response.ok) {
        throw new Error('Failed to fetch featured listings')
    }

    return response.json()
}
