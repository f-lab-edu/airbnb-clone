'use client'

import React from 'react'
import { Card } from '@/components/Card'
import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { Rating } from '@/components/ui/Rating'
import { AirbnbDTO } from '@/types/types'
import Image from 'next/image'

type SearchResultCardProps = {
    name?: AirbnbDTO['name']
    price?: AirbnbDTO['price']
    rating?: AirbnbDTO['rating']
    images?: AirbnbDTO['images']
}

export const SearchResultCard = ({
    name,
    price,
    images,
    rating,
}: SearchResultCardProps) => {
    return (
        <Card>
{renderImages(images)}

            <Flex justify={'between'}>
                <Text>{name}</Text>
                <Rating>{rating}</Rating>
            </Flex>
            <Text>177km 거리 </Text>
            <Text>₩{price}</Text>
        </Card>
    )
}
