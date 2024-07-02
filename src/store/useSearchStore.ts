import { addDays } from 'date-fns'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { InitialState, SearchAction, SearchState } from './types'

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

        setDateRange: (range, selectedDay, activeModifiers, e) =>
            set({ from: range?.from, to: range?.to }),

        setGuests: (update) =>
            set(({ guests }) => {
                const [key, value] = Object.entries(update)[0]

                return {
                    guests: {
                        ...guests,
                        [key]: guests[key as keyof typeof guests] + value,
                    },
                }
            }),
        resetSearch: () => set(initialState),
    }))
)
