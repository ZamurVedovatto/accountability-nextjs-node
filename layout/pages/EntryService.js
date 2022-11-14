async function getAllIncome() {
  return await fetch('data/income.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

async function getAllOutcome() {
  return await fetch('data/outcome.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

export { getAllIncome, getAllOutcome }
