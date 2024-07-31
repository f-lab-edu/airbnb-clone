import { SkeletonCard } from '@/components/SkeletonCard'

export const SkeletonCardList = () => {
    // TODO: 정적 값 대신 동적 값으로 변경 필요
    const unorderedCards = () =>
        Array.from({ length: 10 }, (_, idx) => {
            return (
                <div key={idx} className={'w-1/4'}>
                    <SkeletonCard />
                </div>
            )
        })

    return (
        <div className="w-full main-search-result-grid">{unorderedCards()}</div>
    )
}
