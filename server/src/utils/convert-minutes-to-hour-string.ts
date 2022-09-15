export function convertMinutesToHourString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount /60)
  const minutes = minutesAmount % 60
  // converte para string e caso n tenho 2 caracteres incrementa um 0 na frente
  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}