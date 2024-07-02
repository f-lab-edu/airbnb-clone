import { Flex } from '@/components/Flex'
import { CountInputProps } from '@/types/types'
import { MinusIcon, PlusIcon } from '@/components/Icons'
import { clsx } from 'clsx'

export const GuestTypeCounter = ({
    count,
    guestType,
    minusDisabled,
    plusDisabled,
    onButtonClick,
}: CountInputProps) => {
    return (
        <Flex className={'gap-2'}>
            <button
                className={
                    'flex justify-center items-center rounded-full border border-gray-300 w-8 h-8'
                }
                name="subtract"
                onClick={(e) => onButtonClick(guestType, e)}
                disabled={minusDisabled}
            >
                <span>
                    <MinusIcon
                        width={12}
                        height={12}
                        className={clsx(
                            minusDisabled
                                ? 'text-airbnb-neutral-200'
                                : 'text-airbnb-neutral-700'
                        )}
                    />
                </span>
            </button>
            <span>{count}</span>
            <button
                className={
                    'flex justify-center items-center rounded-full border border-gray-300 w-8 h-8'
                }
                name="add"
                onClick={(e) => onButtonClick(guestType, e)}
                disabled={plusDisabled}
            >
                <span className={'p-1'}>
                    <PlusIcon
                        width={12}
                        height={12}
                        className={clsx(
                            plusDisabled
                                ? 'text-airbnb-neutral-200'
                                : 'text-airbnb-neutral-700'
                        )}
                    />
                </span>
            </button>
        </Flex>
    )
}
