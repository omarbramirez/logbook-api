import { Weather, Visibility } from "./enums"


export interface DiaryEntry{
    id: number,
    date: string,
    weather: Wheather,
    visibility: Visibility,
    comment: string
}

export type WithoutInfo = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

