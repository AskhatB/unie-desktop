const percentSumm = (sumrange, initial) => {
  let init = sumrange / 100 * initial
  let summ = sumrange - init

  return summ
  // console.log(summ)
  //summ оставшаяся сумма которую должен платить клиент
}
percentSumm(0, 50)

export default percentSumm;