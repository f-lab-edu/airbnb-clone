'use client'

import { ErrorBoundary } from 'react-error-boundary'
import { FallbackRender } from '@/components/FallbackRender'
import { Suspense } from 'react'
import { SkeletonCardList } from '@/components/SkeletonCardList'
import { SearchResult } from './SearchResult'

export default function SearchPage() {
    return (
        <ErrorBoundary FallbackComponent={FallbackRender}>
            <Suspense fallback={<SkeletonCardList />}>
                <SearchResult />
            </Suspense>
        </ErrorBoundary>
    )
}
