function getAll() {
  return fetch('demo/data/projection.json')
    .then((res) => res.json())
    .then((d) => d.data)
}

export { getAll }
