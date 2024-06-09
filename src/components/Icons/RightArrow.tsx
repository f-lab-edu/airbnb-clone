import { SVGIcon, SVGIconProps } from '@/components/ui/SVGIcon'

export const RightArrow = (props: SVGIconProps) => {
    return (
        <SVGIcon viewBox={'0 0 12 12'} {...props}>
            <path
                d="M4.5 1.5L8.7375 5.7375C8.80621 5.8076 8.8447 5.90184 8.8447 6C8.8447 6.09816 8.80621 6.1924 8.7375 6.2625L4.5 10.5"
                stroke="black"
                strokeWidth="2"
                fill="none"
            />
        </SVGIcon>
    )
}
