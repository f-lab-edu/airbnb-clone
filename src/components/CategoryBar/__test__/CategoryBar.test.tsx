import { CategoryBar } from '@/components/CategoryBar'
import { render, screen } from '@testing-library/react'

describe('CategoryBar', () => {
    it('should render the CartegoryBar component', () => {
        render(<CategoryBar />)
        const categoryBar = screen.getByRole('list')
        expect(categoryBar).toBeInTheDocument()
    })
})
