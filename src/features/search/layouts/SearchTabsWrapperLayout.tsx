import React from 'react'

type SearchTabsWrapperLayout = { children: React.ReactNode }

const SearchTabsWrapperLayout = ({ children }: SearchTabsWrapperLayout) => {
    return (
        <div
            className={
                'flex items-center h-16 border-gray-200 border shadow-md rounded-xl max-w-screen-md mx-auto'
            }
        >
            {children}
        </div>
    )
}

export default SearchTabsWrapperLayout
