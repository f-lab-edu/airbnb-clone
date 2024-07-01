'use client'
import React from 'react'
import SearchInputLayout from '../../layouts/SearchInputLayout'
import { Popover } from '@/components/ui/Popover'

type SearchPopoverInputProps = {
    width: string
    label?: string
    value?: string
    placeholder?: string
    contents?: React.ReactNode
}

export const SearchPopoverInput = ({
    width,
    label,
    value,
    placeholder,
    contents,
}: SearchPopoverInputProps) => {
    return (
        <SearchInputLayout width={width}>
            <Popover>
                <Popover.Trigger>
                    <div className={'border-r border-r-gray-200'}>
                        <label>
                            {label}
                            <input
                                type={'text'}
                                placeholder={placeholder}
                                value={value}
                            />
                        </label>
                    </div>
                </Popover.Trigger>
                {contents && <Popover.Content>{contents}</Popover.Content>}
            </Popover>
        </SearchInputLayout>
    )
}
