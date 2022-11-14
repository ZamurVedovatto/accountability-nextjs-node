async function getAll() {
  return await fetch('demo/data/accounts.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

export { getAll }
