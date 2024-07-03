'use client'

import { Flex } from '@/components/Flex'
import { config } from '@/config'
import { CountInputProps } from '@/types/types'

export const GuestTypeCounter = ({
    onButtonClick,
    count,
    guestType,
}: CountInputProps) => {
    return (
        <Flex
            justify={'justify-between'}
            align={'center'}
            className={'min-w-96'}
        >
            <button
                name="subtract"
                onClick={(e) => onButtonClick(guestType, e)}
                disabled={count <= 0}
            >
                -
            </button>
            <span>{count}</span>
            <button
                name="add"
                onClick={(e) => onButtonClick(guestType, e)}
                disabled={count >= config.maxGuests[guestType]}
            >
                +
            </button>
        </Flex>
    )
}
