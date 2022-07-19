import { NameSpace } from '../store/root-reducer';

export const getProductQuantity = () => {
  let quantity = 0;
  
  JSON.parse(localStorage.getItem('state'))[NameSpace.UserProcess].productsInCart.map((item) => (
    quantity += item.quantity
  ))
  
  return quantity;
}

export const getProduct = (productsInCart, product) => {
  let sameProduct;

  if (product.attributes.length === 0) {
    sameProduct = productsInCart.find((item) => item.id === product.id);
  } else {
    const productsWithSameId = productsInCart.filter((item) => item.id === product.id);
    sameProduct = productsWithSameId.find((item) => (
      JSON.stringify(item?.checkedAttributes) === JSON.stringify(product.checkedAttributes)
    ))
  }

  return sameProduct;
}

export const updateProductList = (productsInCart, addedProduct) => {
  const sameProduct = getProduct(productsInCart, addedProduct)

  const sameProductIndex = productsInCart.indexOf(sameProduct);

  const updatedProductList = [...productsInCart]

  if (sameProduct) {
    const updatedSameProduct = {...sameProduct};
    updatedSameProduct['quantity'] += 1;
    updatedProductList.splice(sameProductIndex, 1, updatedSameProduct);
  } else {
    addedProduct['quantity'] = 1;
    updatedProductList.push(addedProduct)
  }
  
  return updatedProductList;
}
