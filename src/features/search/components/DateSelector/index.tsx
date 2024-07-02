import { BaseTabs } from '@/components/ui/BaseTabs/BaseTabs'
import { RangeCalendar } from '@/features/search/components/RangeCalendar'

export const DateSelector = () => {
    return (
        <BaseTabs>
            <BaseTabs.List
                className={
                    'grid grid-cols-auto-fit mx-auto bg-airbnb-neutral-300 px-4 py-2 rounded-3xl gap-x-8'
                }
            >
                <BaseTabs.Trigger
                    value="dates"
                    className={'px-4 py-2'}
                    activeClassName={'bg-airbnb-neutral-100 rounded-3xl px-2'}
                >
                    날짜지정
                </BaseTabs.Trigger>
                <BaseTabs.Trigger
                    value="months"
                    className={'px-4 py-2 gap-2'}
                    activeClassName={'bg-airbnb-neutral-100 rounded-3xl px-2'}
                >
                    월단위
                </BaseTabs.Trigger>
                <BaseTabs.Trigger
                    value="flexible"
                    className={'px-4 py-2'}
                    activeClassName={'bg-airbnb-neutral-100 rounded-3xl px-2'}
                >
                    유연한 일정
                </BaseTabs.Trigger>
            </BaseTabs.List>
            {
                <BaseTabs.Content value="dates">
                    <RangeCalendar />
                </BaseTabs.Content>
            }
            {
                <BaseTabs.Content value="months">
                    <h1>months</h1>
                </BaseTabs.Content>
            }
            {
                <BaseTabs.Content value="flexible">
                    <h1>flexible</h1>
                </BaseTabs.Content>
            }
        </BaseTabs>
    )
}
