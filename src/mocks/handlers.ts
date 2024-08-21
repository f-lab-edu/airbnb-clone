import { AirbnbDTO } from '@/types/types'
import axios, { AxiosResponse } from 'axios'
import { http, HttpResponse } from 'msw'

export const delay = (ms = 600) => {
    return new Promise((resolve): void => {
        setTimeout(resolve, ms)
    })
}

export const handlers = [
    // for testing
    http.get('/api/v1/ping', () => {
        return HttpResponse.json({
            pong: true,
            length: 1,
        })
    }),
    http.get('/api/v1/listings/featured', async ({ request }) => {
        console.log('/api/v1/listings/featured')
        const url = new URL(request.url)
        const limit = url.searchParams.get('limit')
        const offset = url.searchParams.get('offset')
        const mockList: AirbnbDTO[] = require('../../public/mockData3.json')
        const items = mockList.slice(
            Math.max(0, Number(offset)),
            Math.min(mockList.length, Number(offset) + Number(limit))
        )
        console.log('/listings/featured, offset', items, offset)
        const result = {
            data: {
                items,
                total: mockList.length,
                offset,
                limit,
            },
        }

        await delay(2000)
        return HttpResponse.json(result.data)
    }),

    http.get('/api/v1/search', async ({ request }) => {
        const url = new URL(request.url)
        const searchParams: SearchParams = {}
        type SearchParams = {
            [key: string]: string | number
        }
        Array.from(url.searchParams.entries()).forEach(([key, value]) => {
            searchParams[key] = value
        })
        const { offset = 0, limit = 5 } = searchParams
        const mockList: AirbnbDTO[] = require('../../public/mockData3.json')

        const items = mockList.slice(
            Math.max(0, Number(offset)),
            Math.min(mockList.length, Number(offset) + Number(limit))
        )
        const result = {
            data: {
                items,
                total: mockList.length,
                offset,
                limit,
            },
        }

        await delay(2000)
        return HttpResponse.json(result.data)
    }),
]
