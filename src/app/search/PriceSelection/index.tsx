'use client'
import React, { useCallback } from 'react'
import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { Slider } from '@/components/ui/Slider'
import { priceFilterData } from './constants'
import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import { useSearchParams } from 'next/navigation'

export const PriceSelection = () => {
    const searchParams = useSearchParams()
    const priceParam = Number(searchParams.get('price')) || 0
    const buildQueryString = useCreateQueryString()
    const handleClickChange = useCallback(
        (value: number[]) => {
            const currentStep = value.at(0) ?? 0 //TODO: should apply magic number
            const currentPrice =
                (currentStep / priceFilterData.sliderConfig.max) *
                priceFilterData.range.max

            //TODO: REFACTOR CUSTOM HOOK
            window.history.pushState(
                null,
                '',
                `?${buildQueryString('price', currentPrice.toString())}`
            )
        },
        [buildQueryString]
    )

    return (
        <div>
            <Text>
                <h4>{priceFilterData.title}</h4>
            </Text>
            <Text>
                <h2>
                    {priceParam}-{priceFilterData.labels.max}
                </h2>
            </Text>

            <Slider
                onValueChange={handleClickChange}
                defaultValue={[
                    priceParam
                        ? (priceParam / priceFilterData.range.max) *
                          priceFilterData.sliderConfig.max
                        : priceFilterData.range.defaultValue,
                ]}
                max={priceFilterData.sliderConfig.max}
                step={priceFilterData.sliderConfig.step}
                className="my-4"
            />
            <Flex className={'justify-between '}>
                <Text>
                    <h4>{priceFilterData.labels.min}</h4>
                </Text>
                <Text>
                    <h4>{priceFilterData.labels.max}</h4>
                </Text>
            </Flex>
        </div>
    )
}
