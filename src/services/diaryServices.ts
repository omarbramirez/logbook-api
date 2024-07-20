import { DiaryEntry,  WithoutInfo, NewDiaryEntry} from '../types'
import diaryData from './diaries.json'



const diaries: Array<DiaryEntry>= diaryData as Array<DiaryEntry>
export const getEntries = (): DiaryEntry[] => diaries 
export const findById = (id:number):DiaryEntry | undefined =>{
    const entry = diaries.find(d=> d.id === id)
    return entry
}
export const getEntriesWithout = (): WithoutInfo[]=>{
    return  diaries.map(({id, date, weather, visibility})=>{
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d=>d.id)) + 1,
        ...newDiaryEntry
    }
    diaryData.push(newDiary)
    return newDiary
}

 