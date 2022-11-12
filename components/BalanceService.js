export class BalanceService {
  getAll() {
    return fetch('demo/data/balance.json')
      .then((res) => res.json())
      .then((d) => d.data)
  }
}
