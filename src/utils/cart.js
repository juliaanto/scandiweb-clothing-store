import { NameSpace } from '../store/root-reducer';

export const getProductQuantity = () => {
  let quantity = 0;
  
  JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart.map((item) => (
    quantity += item.quantity
  ))
  
  return quantity;
}

export const getProduct = (productsInCart, product) => {
  const productsWithSameId = productsInCart.filter((item) => item.id === product.id);
  const sameProduct = productsWithSameId.find((item) => (
    JSON.stringify(item?.checkedAttributes) === JSON.stringify(product.checkedAttributes)
  ))
  
  return sameProduct;
}