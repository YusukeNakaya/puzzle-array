export default function shuffleArray(reciveArray) {
  let arrayLength = reciveArray.length
  let resultArray = reciveArray

  while (arrayLength) {
    let m = Math.floor(Math.random() * arrayLength)
    let n = resultArray[--arrayLength]
    resultArray[arrayLength] = resultArray[m]
    resultArray[m] = n
  }

  return resultArray
}
