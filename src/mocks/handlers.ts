import { http, HttpResponse } from 'msw'
import { mockListings } from '../../mockdataGenerator'

export const handlers = [
    // for testing
    http.get('/api/v1/ping', () => {
        return HttpResponse.json({
            pong: true,
            length: 1,
        })
    }),

    //GET /api/v1/search/listings?offset=40&limit=20
    http.get('/api/v1/search', async ({ request }) => {
        const url = new URL(request.url)
        const searchParams: SearchParams = {}
        type SearchParams = {
            [key: string]: number
        }
        Array.from(url.searchParams.entries()).forEach(([key, value]) => {
            searchParams[key] = Number(value)
        })
        const { offset = 0, limit = 5 } = searchParams
        const items = mockListings.slice(offset, offset + limit)
        const total = mockListings.length
        const result = {
            data: { items, total, offset, limit },
        }
        return HttpResponse.json(result.data)
    }),
]
