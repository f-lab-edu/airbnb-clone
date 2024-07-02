'use client'

import React from 'react'
import { Flex } from '@/components/Flex'
import { GuestOptionId } from '@/store/types'
import { useSearchStore } from '@/store/useSearchStore'
import { GUEST_TYPES, GuestCountOperation } from '@/types/types'
import { GuestTypeInfo } from '../GuestTypeInfo'
import { GuestTypeCounter } from '../GuestTypeCounter'

// 요구사항: 어린이 게스트 증가 감소할 경우, 성인으로 간주하여 증가 감소
export const GuestSelector = () => {
    const { guests, setGuests } = useSearchStore()

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
            <Flex key={guestType} justify={'space-between'} align={'center'}>
                <GuestTypeInfo label={label} ageRange={ageRange} />
                <GuestTypeCounter
                    onButtonClick={handleButtonClicked}
                    count={guests[guestType as GuestOptionId]}
                    guestType={guestType as GuestOptionId}
                />
            </Flex>
        )
    )

    return <>{GuestTypeCountList}</>
}
