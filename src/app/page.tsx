import { SearchTabs } from '@/features/search/components/SearchTabs'
import { CategoryBar } from '@/components/CategoryBar'
import { SearchResultWrapper } from '@/components/SearchResultWrapper'

export default function Home() {
    return (
        <>
            <header className="w-full h-40 px-10 border-b border-grey-200">
                <SearchTabs />
            </header>

            <main className={'px-10'}>
                <section
                    id={'main_category'}
                    className={'flex gap-6 py-6 h-20 items-center w-full mt-6'}
                >
                    <CategoryBar />
                </section>

                <section id={'main_list'}>
                    <SearchResultWrapper />
                </section>
            </main>
        </>
    )
}
