'use client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    isServer,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

export function Providers({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    function makeQueryClient() {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: false,
                    // With SSR, we usually want to set some default staleTime
                    // above 0 to avoid refetching immediately on the client
                    staleTime: 60 * 1000, // 1 min
                },
            },
        })
    }
    let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (isServer) {
        return makeQueryClient();
    }

    if (!browserQueryClient) {
        browserQueryClient = makeQueryClient();
    }
    
    return browserQueryClient;
}

    const queryClient = getQueryClient()
    console.log('layout')
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools
                initialIsOpen={process.env.NODE_ENV === 'development'}
            />
            {children}
        </QueryClientProvider>
    )
}
