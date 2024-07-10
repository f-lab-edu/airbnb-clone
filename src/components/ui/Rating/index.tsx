import React from 'react'

export const Rating = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <p>rating</p>
            {children}
        </div>
    )
}
