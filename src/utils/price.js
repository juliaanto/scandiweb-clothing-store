export const getPrice = (productPrices, currentCurrency) => {
  return productPrices?.find((price) => price.currency?.label === currentCurrency?.label);
}