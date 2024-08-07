'use client'

import UserIcon from '@/components/Icons/Profile'
import HamburgerIcon from '@/components/Icons/Hamburger'

export const ProfileButton = () => {
    return (
        <div className="flex items-center justify-center w-24 h-12 bg-white rounded-full border border-gray-200 cursor-pointer">
            <div className="flex items-center justify-center w-8 h-8 rounded-full">
                <HamburgerIcon />
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full ml-2">
                <UserIcon />
            </div>
        </div>
    )
}
