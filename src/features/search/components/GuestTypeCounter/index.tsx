'use client'

import { Flex } from '@/components/Flex'
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
            >
                -
            </button>
            <span>{count}</span>
            <button name="add" onClick={(e) => onButtonClick(guestType, e)}>
                +
            </button>
        </Flex>
    )
}
