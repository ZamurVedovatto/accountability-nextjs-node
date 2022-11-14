export const formatCurrency = (value) => {
  return value
    ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : null
}
