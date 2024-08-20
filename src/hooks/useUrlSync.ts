import { useSearchStore } from '@/store/useSearchStore'
import { format } from 'date-fns'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useUrlSync = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { setDestination, setGuests } = useSearchStore()

    // URL 파라미터를 읽어서 상태에 반영
    useEffect(() => {
        const destination = searchParams.get('destination') || ''
        const adults = parseInt(searchParams.get('adults') || '0', 10)
        const children = parseInt(searchParams.get('children') || '0', 10)
        const infants = parseInt(searchParams.get('infants') || '0', 10)

        setDestination(destination)
        setGuests({ adults, children, infants })
    }, [searchParams, setDestination, setGuests])

    // 상태를 URL 파라미터에 반영
    const updateUrl = () => {
        const { destination, from, to, guests } = useSearchStore.getState()

        const newSearchParams = new URLSearchParams({
            destination: destination,
            from: from ? format(from, 'yyyy-MM-dd') : '',
            to: to ? format(to, 'yyyy-MM-dd') : '',
            adults: guests.adults.toString(),
            children: guests.children.toString(),
            infants: guests.infants.toString(),
        })
        //TODO:  하드코딩 된 URL을 사용하지 않도록 수정
        router.push(`search?${newSearchParams.toString()}`, { scroll: false })
    }

    return { updateUrl }
}
