function getAll() {
  return fetch('demo/data/strategy.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

export { getAll }
