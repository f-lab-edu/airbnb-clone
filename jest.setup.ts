import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import { testUtils } from '@/types/test-utils'
configure({
    testIdAttribute: 'data-testid',
})

global._t = testUtils
