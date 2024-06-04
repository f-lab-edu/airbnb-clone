'use client'
import { useState } from 'react'
import { DropDownProps, DropDownMenuProps, DropDownItemProps } from './type'

function DropDown({ options, triggerElement }: Readonly<DropDownProps>) {
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
                        <DropDown.Item key={`option_${idx}`}>
                            {option}
                        </DropDown.Item>
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
}: Readonly<{
    ele: React.ReactNode
    triggerToggle: () => void
}>) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        triggerToggle()
    }

    return (
        <button onClick={handleClick} tabIndex={0} className="dropdown-trigger">
            {ele}
        </button>
    )
}

function DropDownMenu({ children }: Readonly<DropDownMenuProps>) {
    return <h3>{children}</h3>
}

function DropDownItem({ children }: Readonly<DropDownItemProps>) {
    if (typeof children === 'string') {
        return <p>{children}</p>
    }
    return <div>{children}</div>
}

DropDown.Trigger = DropTrigger
DropDown.Menu = DropDownMenu
DropDown.Item = DropDownItem

export { DropDown, DropDownMenu, DropDownItem, DropTrigger }
