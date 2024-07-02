import { useSearchStore } from '@/store/useSearchStore'
import { GuestOptionId } from '@/store/types'

export const useGuestLimit = () => {
    const guests = useSearchStore((state) => state.guests)

    return (
        guestType: GuestOptionId,
        maxGuests: { [K in GuestOptionId]: number }
    ) => {
        if (guests['adults'] + guests['children'] >= maxGuests['adults']) {
            return true
        }

        return guests[guestType] >= maxGuests[guestType]
    }
}
