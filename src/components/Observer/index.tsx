import { useIntersectionObserver } from '@uidotdev/usehooks'
import React, { useEffect } from 'react'
import { ObserverProps } from '@/components/Observer/observer.types'

export function Observer({
    loader,
    onIntersect,
    children,
}: Readonly<ObserverProps>) {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: '0px',
    })

    const isReachingEnd = entry?.isIntersecting

    useEffect(() => {
        if (isReachingEnd && typeof onIntersect === 'function') {
            onIntersect(entry)
        }
    }, [isReachingEnd, onIntersect, entry])

    return (
        <div>
            {children}
            {loader}
            <div className={'w-full h-7 '} ref={ref}></div>
        </div>
    )
}
