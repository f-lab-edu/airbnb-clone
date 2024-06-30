import { addDays } from 'date-fns'
import { DateRange, SelectRangeEventHandler } from 'react-day-picker'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface SearchState {
    destination: string
    from: DateRange['from']
    to: DateRange['to']
    guests: number
    setDestination: (destination: string) => void
    setDateRange: SelectRangeEventHandler
    setGuests: (guests: number) => void
    resetSearch: () => void
}

export const useSearchStore = create<SearchState>()(
    devtools((set) => ({
        destination: '',
        from: new Date(),
        to: addDays(new Date(), 4),
        guests: 1,
        setDestination: (destination) => set({ destination }),
        setDateRange: (range, selectedDay, activeModifiers, e) =>
            set({ from: range?.from, to: range?.to }),
        setGuests: (guests) => set({ guests }),
        resetSearch: () =>
            set({
                destination: '',
                from: new Date(),
                to: addDays(new Date(), 4),
                guests: 1,
            }),
    }))
)
