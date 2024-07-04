import { addDays } from 'date-fns'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { InitialState, SearchAction, SearchState } from './types'
import { objectKeys } from '@/lib/utils'

const initialState: InitialState = {
    destination: '',
    from: new Date(),
    to: addDays(new Date(), 4),
    guests: {
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    },
}

export const useSearchStore = create<SearchState & SearchAction>()(
    devtools((set) => ({
        ...initialState,
        setDestination: (destination) => set({ destination }),

        setDateRange: (range) => set({ from: range?.from, to: range?.to }),

        setGuests: (update) =>
            set(({ guests }) => {
                const guestType = objectKeys(update)[0]
                const count = update[guestType] ?? 0 // 없을 경우 0 처리
                const updatedGuests = {
                    ...guests,
                    [guestType]: guests[guestType] + count,
                }
                return { guests: updatedGuests }
            }),
        resetSearch: () => set(initialState),
    }))
)
