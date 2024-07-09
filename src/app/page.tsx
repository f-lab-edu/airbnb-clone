import Link from 'next/link'

import React, { Suspense } from 'react'
import { DropDown } from '@/components/ui/DropDown'
import { ProfileButton } from '@/components/ProfileButton'
import { Logo } from '@/components/Logo'
import { SearchTabs } from '@/features/search/components/SearchTabs'
import { CategoryBar } from '@/components/CategoryBar'
import { FilterButton } from '@/components/FilterButton'
import { DropDownItem } from '@/components/ui/DropDown/DropDown'
import { SearchResult } from '@/features/search/components/SearchResult'

export default function Home() {
    return (
        <>
            <header className="w-full h-40 px-10 border-b border-grey-200">
                <nav className={'flex justify-between item-center w-full h-20'}>
                    <div className={'flex w-1/3 items-center'}>
                        <Logo />
                    </div>
                    <div className={'flex justify-between items-center w-1/3'}>
                        <Link href="#">
                            <p>숙소 </p>
                        </Link>
                        <Link href="#">
                            <p>체험</p>
                        </Link>
                        <Link href="#">
                            <p>온라인 체험</p>
                        </Link>
                    </div>
                    <div className={'flex w-1/3 items-center justify-end'}>
                        <DropDown triggerElement={<ProfileButton />}>
                            <DropDownItem>프로필 </DropDownItem>
                        </DropDown>
                    </div>
                </nav>
                <SearchTabs />
            </header>

            <main className={'px-10'}>
                <section
                    id={'main_category'}
                    className={'flex gap-6 py-6 h-20 items-center w-full mt-6'}
                >
                    <CategoryBar />
                    <FilterButton />
                </section>

                <section
                    id={'main_list'}
                    className={'grid grid-cols-5 grid-rows-5 gap-4 mt-5'}
                >
                    <Suspense>
                        <SearchResult />
                    </Suspense>
                </section>
            </main>
            <footer></footer>
        </>
    )
}
