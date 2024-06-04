import Link from 'next/link'

import { DropDown } from '@/components/ui/DropDown'
import { ProfileButton } from '@/components/ui/ProfileButton'
import { Logo } from '@/components/ui/Logo'
import { SearchTabs } from '@/components/ui/SearchTabs'
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
                        <DropDown
                            options={['로그인', '회원가입']}
                            triggerElement={<ProfileButton />}
                        />
                    </div>
                </nav>
                <SearchTabs />
            </header>

            <main></main>
            <footer></footer>
        </>
    )
}
