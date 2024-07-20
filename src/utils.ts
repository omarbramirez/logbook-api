import { NewDiaryEntry } from "./types";
import { Weather, Visibility } from "./enums"

const parseComment =(commentFromRequest: any): string =>{
    if(typeof commentFromRequest !== 'string'){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string =>{
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}


const isString = (string: string): boolean =>{
    return typeof string === 'string'
}

const isDate =  (date: string): boolean =>{
    return  typeof date === 'string'
}

const parseWeather = (weatherFromRequest:any):Weather =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing Wather')
    }
    return weatherFromRequest
}

const isWeather = (weather: any): boolean =>{
    return Object.values(Weather).includes(weather)
}


const parseVisibility = (visibilityFromRequest:any):Visibility =>{
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing Wather')
    }
    return visibilityFromRequest
}

const isVisibility = (weather: any): boolean =>{
    return Object.values(Visibility).includes(weather)
}


const toNewDiaryEntry = (object:any): NewDiaryEntry =>{
    const newEntry: NewDiaryEntry = {
        comment : parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry