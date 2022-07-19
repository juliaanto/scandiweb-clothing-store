export const getPrice = (productPrices, currentCurrency) => {
  return productPrices?.find((price) => price.currency?.label === currentCurrency?.label);
};

export const getTotalPrice = (productsInCart, currentCurrency) => {
  let totalPrice = 0;

  productsInCart.forEach((item) => {
    const itemPrice = getPrice(item.prices, currentCurrency).amount;
    totalPrice += itemPrice * item.quantity;
  })
    
  return Math.ceil(totalPrice * 100) / 100;
};

export const getTax = (totalPrice) => Math.ceil(totalPrice * 0.21 * 100) / 100;