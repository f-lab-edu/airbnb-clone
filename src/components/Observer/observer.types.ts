import React from 'react'

export type ObserverProps = {
    children: React.ReactNode
    onIntersect: (entry: IntersectionObserverEntry) => void
    loader: React.ReactNode
}
