export type AirbnbPartial<T> = {
    [P in keyof T]?: T[P]
}

export type AirbnbPick<T, K extends keyof T> = {
    [P in K]: T[P]
}
