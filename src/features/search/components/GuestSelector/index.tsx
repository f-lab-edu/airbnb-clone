'use client'

import React from 'react'
import { Flex } from '@/components/Flex'
import { GuestOptionId } from '@/store/types'
import { useSearchStore } from '@/store/useSearchStore'
import { GUEST_TYPES, GuestCountOperation } from '@/types/types'
import { GuestTypeInfo } from '../GuestTypeInfo'
import { GuestTypeCounter } from '../GuestTypeCounter'
import { config } from '@/config'
import { useGuestLimit } from '@/hooks/useGuestLimit'

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
            [guestType]: (operation as GuestCountOperation) === 'add' ? +1 : -1,
        })
    }

    const GuestTypeCountList = Object.entries(GUEST_TYPES).map(
        ([guestType, { label, ageRange }]) => (
            <Flex
                key={guestType}
                justify={'between'}
                align={'center'}
                className={'gap-2.5 min-w-80 py-6 border-b border-gray-200'}
            >
                <GuestTypeInfo label={label} ageRange={ageRange} />
                <GuestTypeCounter
                    onButtonClick={handleButtonClicked}
                    count={guests[guestType as GuestOptionId]}
                    guestType={guestType as GuestOptionId}
                    minusDisabled={guests[guestType as GuestOptionId] === 0}
                    plusDisabled={isGuestLimitReached(
                        guestType as GuestOptionId,
                        config.maxGuests
                    )}
                />
            </Flex>
        )
    )

    return <>{GuestTypeCountList}</>
}
