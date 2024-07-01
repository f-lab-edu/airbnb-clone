'use client'

import { useSearchStore } from '@/store/useSearchStore'
import React from 'react'
import { DayPicker } from 'react-day-picker'

type Props = {}

export const RangeCalendar = (props: Props) => {
    const { setDateRange, from, to } = useSearchStore()

    return (
        <DayPicker
            initialFocus
            mode="range"
            defaultMonth={from}
            selected={{ to, from }}
            onSelect={setDateRange}
            numberOfMonths={2}
            className=""
            classNames={{
                day_range_end: 'day-range-end',
                day_selected:
                    'bg-airbnb-Shades-black-03 hover: bg-airbnb-neutral-600 hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
                day_today: 'bg-accent text-accent-foreground',
                day_outside:
                    'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
                day_range_middle:
                    'aria-selected:bg-accent aria-selected:text-accent-foreground',
            }}
        />
    )
}
