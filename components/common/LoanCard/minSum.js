const minSum = summa => {
  let minSumma = ''
  if (summa.toString().length == 5) {
    minSumma = `${summa.toString().slice(0, 2)} тыс`
  } else if (summa.toString().length == 6) {
    minSumma = `${summa.toString().slice(0, 3)} тыс`
  } else if (summa.toString().length == 7) {
    minSumma = `${summa.toString().slice(0, 1)} млн`
  } else {
    minSumma = summa
  }

  return minSumma
}

export default minSum