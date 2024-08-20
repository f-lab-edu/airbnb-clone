import { QueryOptions, SearchParams, SearchResponse } from '@/types/types'
import { AirbnbPartial } from '@/types/utils'
import _ from 'lodash'

export const fetchSearch = async ({
    limit = 10,
    offset = 0,
    destination,
    from,
    to,
    starRating,
}: AirbnbPartial<SearchParams> & QueryOptions): Promise<SearchResponse> => {
    const cleanedParams = _.omitBy(
        { destination, from, to, starRating },
        _.isNil
    )
    const searchParams = new URLSearchParams(
        cleanedParams as Record<string, string>
    ).toString()
    const response = await fetch(
        `/api/v1/search?offset=${offset}&limit=${limit}&${searchParams}`
    )
    return await response.json()
}
