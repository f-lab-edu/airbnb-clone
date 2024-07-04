'use client'

import React from 'react'
import { Flex } from '@/components/Flex'
import { GuestOptionId } from '@/store/types'
import { useSearchStore } from '@/store/useSearchStore'
import { GUEST_TYPES } from '@/types/types'
import { GuestTypeInfo } from '../GuestTypeInfo'
import { GuestTypeCounter } from '../GuestTypeCounter'
import { config } from '@/config'
import { useGuestLimit } from '@/hooks/useGuestLimit'
import { objectKeys } from '@/lib/utils'

// 요구사항: 어린이 게스트 증가 감소할 경우, 성인으로 간주하여 증가 감소
export const GuestSelector = () => {
    const { guests, setGuests } = useSearchStore()
    const isGuestLimitReached = useGuestLimit()

    const handleButtonClicked = (
        guestType: GuestOptionId,
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        const { name: operation } = e.currentTarget
        setGuests({
            [guestType]: operation === 'add' ? +1 : -1,
        })
    }

    const GuestTypeCountList = objectKeys(GUEST_TYPES).map((guestType) => (
        <Flex
            key={guestType}
            justify={'between'}
            align={'center'}
            className={'gap-2.5 min-w-80 py-6 border-b border-gray-200'}
        >
            <GuestTypeInfo
                label={GUEST_TYPES[guestType].label}
                ageRange={GUEST_TYPES[guestType].ageRange}
            />
            <GuestTypeCounter
                onButtonClick={handleButtonClicked}
                count={guests[guestType]}
                guestType={guestType}
                minusDisabled={guests[guestType] === 0}
                plusDisabled={isGuestLimitReached(guestType, config.maxGuests)}
            />
        </Flex>
    ))

    return <>{GuestTypeCountList}</>
}
