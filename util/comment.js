import {getDetailTime} from './time.filter'

export const formDataComments = comment =>{
    comment.time = getDetailTime(comment.date)
}