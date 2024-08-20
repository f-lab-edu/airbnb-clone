import { CategoryBar } from '@/components/CategoryBar'
import { FilterBar } from './components/FilterBar'

export default function ResultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="result-layout">
            {/* Result 페이지에 공통적으로 적용될 레이아웃 요소들 */}
            <header className="result-header">
                {/* 예: 검색 바, 필터 옵션 등 */}
                <CategoryBar />
            </header>

            <main className="result-main grid grid-cols-[224px_1fr] gap-[42px]">
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
