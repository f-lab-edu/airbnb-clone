'use client'
import { Suspense } from 'react'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchPing } from '@/api/ping'

export function SearchResult() {
    const { data } = useSuspenseInfiniteQuery({
        queryKey: ['ping'],
        queryFn: fetchPing,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        },
        initialPageParam: 0,
    })

    return (
        <div className={'w-96'}>
            <Suspense fallback={<div>waiting....</div>}>
                {JSON.stringify(data, null, 2)}
            </Suspense>
        </div>
    )
}
