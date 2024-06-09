import { SVGIcon, SVGIconProps } from '@/components/ui/SVGIcon'

export const LeftArrow = (props: SVGIconProps) => {
    return (
        <SVGIcon viewBox={'0 0 32 32'} {...props}>
            <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
        </SVGIcon>
    )
}
