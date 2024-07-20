import express from 'express'
const router = express.Router()
import { findById ,addDiary } from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

router.get('/', (_req,res)=>{
    console.log('this is working')
    res.send('boa')
})
router.get(`/:id`, (req, res)=>{
    const diary = findById(+req.params.id)
    res.send(diary?.weather)
})

router.post(`/`, (req, res)=>{
    try{
        const {date, weather, visibility, comment} = req.body

        const newDiaryEntry = addDiary(toNewDiaryEntry({date, weather, visibility, comment}))
        res.send(newDiaryEntry)
    }catch(e){
        res.status(400)
        res.send('something went wrong :(')
    }

})

export default router
