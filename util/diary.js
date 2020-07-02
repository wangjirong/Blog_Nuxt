import {
  getDetailTime
} from './time.filter'
export const formData = list => list.map(diary => {
  diary.time = getDetailTime(diary.date)
  return diary;
})
