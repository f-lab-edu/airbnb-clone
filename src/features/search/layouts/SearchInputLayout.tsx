import React from 'react'

type SearchInputLayoutProps = { width: string; children: React.ReactNode }

const SearchInputLayout = ({ width, children }: SearchInputLayoutProps) => (
    <div className={`flex items-center pl-4 ${width}`}>{children}</div>
)

export default SearchInputLayout
