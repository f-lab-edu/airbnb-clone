'use client'

import { useState, useEffect } from 'react'

/**
 *msw worker는 브라우저에서만 활성화 되므로, window 객체 존재 확인
 * more info : https://github.com/mswjs/msw/issues/1877
 * @param children
 * @constructor
 */

export function MswProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [mswReady, setMswReady] = useState(false)

    useEffect(() => {
        async function enableMocking() {
            if (process.env.NODE_ENV !== 'development') {
                setMswReady(true)
                return
            }

            if (typeof window !== 'undefined') {
                const { worker } = await import('@/mocks/browser')
                await worker.start()
                setMswReady(true)
            }
        }
        enableMocking()
    }, [])

    if (!mswReady) {
        return null
    }

    return <>{children}</>
}
