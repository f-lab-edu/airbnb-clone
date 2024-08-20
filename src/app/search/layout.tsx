import { CategoryBar } from '@/components/CategoryBar'
import { FilterBar } from './components/FilterBar'
import { Separator } from '@radix-ui/react-separator'

export default function ResultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="result-layout">
            <section className="result-category sticky top-20 bg-white z-10">
                {/* 예: 카테고리 바 */}
                <Separator className={'mb-8 h-px bg-gray-200'} />
                <CategoryBar />
                <Separator className={'my-8 h-px bg-gray-200'} />
            </section>

            <main className="result-main grid grid-cols-[224px_1fr] gap-[42px] mt-12">
                <aside className="result-aside">
                    {/* 예: 사이드바, 광고 등 */}
                    <FilterBar />
                </aside>
                <section className="result-section">
                    {/* 예: 검색 결과 목록 */}
                    {children}
                </section>
            </main>
        </div>
    )
}
