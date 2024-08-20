import Link from 'next/link'

import React from 'react'
import { DropDown } from '@/components/ui/DropDown'
import { ProfileButton } from '@/components/ProfileButton'
import { Logo } from '@/components/Logo'
import { SearchTabs } from '@/features/search/components/SearchTabs'
import { CategoryBar } from '@/components/CategoryBar'
import { FilterButton } from '@/components/FilterButton'
import { DropDownItem } from '@/components/ui/DropDown/DropDown'
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
            <footer></footer>
        </>
    )
}
