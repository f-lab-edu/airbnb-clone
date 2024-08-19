'use client'

import React from 'react'
import { Card } from '@/components/Card'
import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { Rating } from '@/components/ui/Rating'
import { AirbnbDTO } from '@/types/types'
import Image from 'next/image'
import { StarIcon } from '@/components/Icons'

type SearchResultCardProps = {
    name: AirbnbDTO['name']
    price: AirbnbDTO['price']
    rating: AirbnbDTO['starRating']
    image: AirbnbDTO['image']
}
/**
 * TODO:
 * 가격 Internationalization 처리, Rating 리팩토링
 *
 *
 * @param param0
 * @returns
 */
export const SearchResultCard = ({
    name,
    price,
    image,
    rating,
}: SearchResultCardProps) => {
    return (
        <Card>
            <Image src={image} alt={name} width={300} height={200} />
            <Flex justify={'between'}>
                <Text>{name}</Text>
                <Rating>
                    <Flex>
                        <StarIcon width={14} />
                        <Text>{rating}</Text>
                    </Flex>
                </Rating>
            </Flex>

            <Text>₩{price}</Text>
        </Card>
    )
}
