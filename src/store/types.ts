import { DateRange, SelectRangeEventHandler } from 'react-day-picker'
import { AirbnbPartial, AirbnbPick } from './../types/utils'

export type GuestOptionId = 'adults' | 'children' | 'infants' | 'pets'

export type GuestState = { [k in GuestOptionId]: number }
export type OptionalGuests = AirbnbPartial<GuestState>
export interface SearchState {
    destination: string
    from: DateRange['from']
    to: DateRange['to']
    guests: GuestState
}

export type InitialState = AirbnbPick<
    SearchState,
    'destination' | 'from' | 'to' | 'guests'
>

export type SearchAction = {
    setDestination: (destination: string) => void
    setDateRange: SelectRangeEventHandler
    setGuests: (update: OptionalGuests) => void
    resetSearch: () => void
}
