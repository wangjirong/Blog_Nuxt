import {
  getDetailTime
} from './time.filter'
export default messageList => messageList.map(message => {
  message.time = getDetailTime(message.date)
  return message
})
