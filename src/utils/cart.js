import { NameSpace } from '../store/root-reducer';

export const getProductQuantity = () => {
  let quantity = 0;
  
  JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart.map((item) => (
    quantity += item.quantity
  ))
  
  return quantity;
}