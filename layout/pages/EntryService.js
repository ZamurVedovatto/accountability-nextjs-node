async function getAllIncome() {
  return await fetch('data/income.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

async function getIncomeMonthSum(month) {
  return await fetch('data/income.json')
    .then((res) => res.json())
    .then((d) => {
      // TODOZ filter by month
      const sum = d.data ? d.data.reduce((acc, o) => acc + o.value, 0) : 0
      return sum
    })
}

async function getAllOutcome() {
  return await fetch('data/outcome.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

export { getAllIncome, getAllOutcome, getIncomeMonthSum }
