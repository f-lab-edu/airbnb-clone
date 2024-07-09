interface PongType {
    pong: boolean
    length: number
}

export const fetchPing = async ({ pageParam }: { pageParam: number }) => {
    const response = await fetch(`/api/v1/ping`)
    return (await response.json()) as PongType
}
