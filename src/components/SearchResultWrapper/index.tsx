'use client'
import { ErrorBoundary } from 'react-error-boundary'
import { Suspense } from '@suspensive/react'
import { SkeletonCardList } from '@/components/SkeletonCardList'
import { SearchResult } from '@/features/search/components/SearchResult'
import React from 'react'
import { FallbackRender } from '@/components/FallbackRender'

export function SearchResultWrapper() {
    return (
        <ErrorBoundary FallbackComponent={FallbackRender}>
            <Suspense fallback={<SkeletonCardList />}>
                <SearchResult />
            </Suspense>
        </ErrorBoundary>
    )
}
