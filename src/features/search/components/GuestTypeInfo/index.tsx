export const GuestTypeInfo = ({
    label,
    ageRange,
}: {
    label: string
    ageRange: string
}) => {
    return (
        <div>
            <div>
                <p>{label}</p>
            </div>
            <div>
                <p>{ageRange}</p>
            </div>
        </div>
    )
}
