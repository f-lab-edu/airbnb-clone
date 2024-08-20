import { Checkbox } from '@/components/ui/Checkbox'
import React from 'react'

type Props = {}

export const StarRatingSelection = (props: Props) => {
    const starRatings = () => {
        return Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
            <div className="items-top flex space-x-2 mt-5" key={rating}>
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {rating}성급
                    </label>
                </div>
            </div>
        ))
    }
    return (
        <>
            <h1>호텔 성급</h1>
            {starRatings()}
        </>
    )
}
