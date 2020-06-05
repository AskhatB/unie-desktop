const maxSum = summa => {
  let maxSumma = ''
  if(summa.toString().length == 7){
    maxSumma = `${summa.toString().slice(0, 1)} млн`
  }else if(summa.toString().length == 8){
    maxSumma = `${summa.toString().slice(0, 2)} млн`
  }else if(summa.toString().length == 6){
    maxSumma = `${summa.toString().slice(0, 3)} тыс`
  }else{
    maxSumma = summa
  }
  return maxSumma
}

export default maxSum