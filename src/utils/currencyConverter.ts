/**
 * Converts to BRL currency format
 * @param value - Number to be converted
 * @retuns Converted BRL string
 */
export const currencyConverter = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
