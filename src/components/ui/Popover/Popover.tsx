'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type PopoverProps = {
    children?: React.ReactNode
}
type PopoverContextType = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
//create context
const PopoverContext = createContext<PopoverContextType | null>(null)

export default function Popover({ children }: Readonly<PopoverProps>) {
    const [isOpen, setIsOpen] = useState(false)
    const popoverContentRef = React.createRef<HTMLDivElement>()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            console.log('target', e.currentTarget)
            if (
                isOpen &&
                popoverContentRef.current &&
                !popoverContentRef.current.contains(e.target as Node)
            ) {
                console.log('clickoutside')
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', () => {
                console.log('remove')
            })
        }
    }, [isOpen])
    return (
        <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
            <div ref={popoverContentRef}>{children}</div>
        </PopoverContext.Provider>
    )
}

type PopoverTriggerProps = {
    children: React.ReactNode
}

export function PopoverTrigger({ children }: Readonly<PopoverTriggerProps>) {
    const value = useContext(PopoverContext)
    const triggerToggle = () => value?.setIsOpen((prev) => !prev)

    return (
        <div onClick={triggerToggle} tabIndex={0} className="popover-trigger">
            {children}
        </div>
    )
}

export function PopoverContent({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const value = useContext(PopoverContext)

    if (!value) {
        throw new Error(
            'PopoverContent 컴포넌트는 Popover 컴포넌트 내부에서 사용되어야 합니다.'
        )
    }
    const { isOpen } = value

    return (
        isOpen && (
            <Overlay>
                <div className="popover-content_wrapper">{children}</div>
            </Overlay>
        )
    )
}

function Overlay({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="fixed inset-0 z-10">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
                {children}
            </div>
        </div>
    )
}

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
