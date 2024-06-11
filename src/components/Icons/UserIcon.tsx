import { SVGIcon, SVGIconProps } from '@/components/ui/SVGIcon'

export const UserIcon = (props: SVGIconProps) => {
    return (
        <SVGIcon viewBox={'0 0 33 33'} {...props}>
            <path
                d="M16.02 1.2C7.57997 1.2 0.719971 8.06 0.719971 16.5C0.719971 24.94 7.57997 31.8 16.02 31.8C24.46 31.8 31.32 24.94 31.32 16.5C31.32 8.06 24.46 1.2 16.02 1.2ZM16.02 29.2C12 29.2 8.41997 27.32 6.08997 24.39C7.71157 22.2686 9.97318 20.7258 12.54 19.99C11.6148 19.4035 10.8528 18.5927 10.3248 17.6329C9.79681 16.6731 9.51996 15.5954 9.51997 14.5C9.51997 12.7761 10.2048 11.1228 11.4238 9.9038C12.6428 8.68482 14.2961 8 16.02 8C17.7439 8 19.3972 8.68482 20.6162 9.9038C21.8351 11.1228 22.52 12.7761 22.52 14.5C22.5207 15.597 22.2443 16.6763 21.7163 17.6378C21.1884 18.5994 20.426 19.4119 19.5 20C22.0671 20.7352 24.3289 22.2781 25.95 24.4C24.7636 25.8968 23.2542 27.106 21.5347 27.9372C19.8151 28.7684 17.9299 29.2001 16.02 29.2Z"
                fill="#6A6A6A"
            />
        </SVGIcon>
    )
}
