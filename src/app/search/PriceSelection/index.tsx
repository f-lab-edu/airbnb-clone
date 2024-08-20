import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { Slider } from '@/components/ui/Slider'
import React from 'react'

type Props = {}

export const PriceSelection = (props: Props) => {
    //TODO: 0원 동적 값으로 변경
    return (
        <div>
            <Text>
                <h4>가격</h4>
            </Text>
            <Text>
                <h2>0원 - 500,000원+</h2>
            </Text>
            <Slider defaultValue={[0]} max={100} step={1} className="my-4" />
            <Flex className={'justify-between '}>
                <Text>
                    <h4>0원</h4>
                </Text>
                <Text>
                    <h4>500,000원+</h4>
                </Text>
            </Flex>
        </div>
    )
}
