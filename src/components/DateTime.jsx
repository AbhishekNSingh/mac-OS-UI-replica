import React from 'react'

const DateTime = () => {
  const now = new Date()

  const weekdays = ['SUN','MON','TUE','WED','THU','FRI','SAT']
  const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

  const weekday = weekdays[now.getDay()]
  const month = months[now.getMonth()]
  const day = now.getDate().toString().padStart(2, ' ')

  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const isPm = hours >= 12
  const amPm = isPm ? 'PM' : 'AM'

  hours = hours % 12
  if (hours === 0) hours = 12

  const time = `${hours}:${minutes} ${amPm}`
  const dateTimeString = `${weekday} ${month} ${day} ${time}`

  return <div>{dateTimeString}</div>
}

export default DateTime