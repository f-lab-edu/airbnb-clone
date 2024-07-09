import { http, HttpResponse } from 'msw'

export const handlers = [
    // Intercept "GET https://example.com/user" requests...
    http.get('/api/v1/ping', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json({
            pong: true,
            length: 1,
        })
    }),
]
