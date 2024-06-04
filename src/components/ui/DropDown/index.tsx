'use client'
import { useState } from 'react'

type DropDownProps = {
    triggerElement?: any
    options: string[]
}
function DropDown({ options, triggerElement }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const triggerToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <DropDown.Trigger
                ele={triggerElement}
                triggerToggle={triggerToggle}
            />
            {isOpen && (
                <DropDown.Menu>
                    {options.map((option, idx) => (
                        <DropDown.Item key={idx}>{option}</DropDown.Item>
                    ))}
                </DropDown.Menu>
            )}
        </>
    )
}

// DropTrigger은 실제 DropDown에서 상태와는 무관하게 DropDown을 토글하는 역할을 한다.
function DropTrigger({
    ele,
    triggerToggle,
}: {
    ele: React.ReactNode
    triggerToggle: () => void
}) {
    const handleClick = () => {
        triggerToggle()
    }
    return (
        <div onClick={handleClick} className="dropdown-trigger">
            {ele}
        </div>
    )
}

function DropDownMenu({ children }: { children: React.ReactNode }) {
    return <h3>{children}</h3>
}

function DropDownItem({ children }: { children: React.ReactNode }) {
    if (typeof children === 'string') {
        return <p>{children}</p>
    }
    return <div>{children}</div>
}

DropDown.Trigger = DropTrigger
DropDown.Menu = DropDownMenu
DropDown.Item = DropDownItem

export { DropDown }
