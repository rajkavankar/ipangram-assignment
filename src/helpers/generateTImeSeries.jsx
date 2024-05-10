function pad(num) {
  return num < 10 ? "0" + num : num
}

export function generateTimeSeries(diff) {
  const timeSeries = []
  for (let hour = 8; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const adjustedHour = hour - diff >= 0 ? hour - diff : hour - diff + 24
      const time = `${pad(
        adjustedHour > 12 ? adjustedHour - 12 : adjustedHour
      )}:${pad(minute)} ${adjustedHour < 12 ? "am" : "pm"}`
      timeSeries.push({
        active: false,
        time,
      })
    }
  }
  return timeSeries.slice(0, timeSeries.length - 1)
}
