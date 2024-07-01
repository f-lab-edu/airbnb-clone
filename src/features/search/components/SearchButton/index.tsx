'use client'
import Search from '@/components/Icons/Search'

export const SearchButton = () => {
    return (
        <div>
            <button
                className={
                    'flex justify-center items-center w-12 h-12 rounded-full bg-rose-600 mr-4'
                }
            >
                <Search width={14} height={14} />
            </button>
        </div>
    )
}
