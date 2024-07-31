import { Skeleton } from '@/components/ui/Skeleton'

export function SkeletonCard() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-[250px] w-[300px] rounded-xl" />
            <div className="flex justify-between ">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[30px]" />
            </div>
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[70px]" />
        </div>
    )
}
