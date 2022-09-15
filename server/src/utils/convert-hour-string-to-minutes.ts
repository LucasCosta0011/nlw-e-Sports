// 18:00 -> 1800
// split -> ["18", "00"]
// map(Number) split -> [18, 00]


export function convertHourStringToMinutes(hourString: string) {

  if(typeof hourString === 'string'){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;
  
  return minutesAmount;
  }else{
    return 0;
  }
}