export const If = ({
    condition,
    children,
}: Readonly<{ condition: boolean; children: React.ReactNode }>) => {
    if (condition) {
        return <>{children}</>
    }
    return <></>
}
