import React from 'react'
import { PriceSelection } from '../PriceSelection'
import { Separator } from '@/components/ui/Separator'
import { StarRatingSelection } from '../StarRatingSelection'

type Props = {}

export const FilterBar = (props: Props) => {
    return (
        <>
            <PriceSelection />
            <Separator className={'my-8'} />
            <StarRatingSelection />
            <Separator className={'my-8'} />
        </>
    )
}
