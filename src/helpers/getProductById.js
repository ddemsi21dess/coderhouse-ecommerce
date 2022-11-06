
import {localProducts} from '../data/products.js';

export const getProductById = (productId) => {
  //If the api fails, the products will be the local.
  const currentProducts = localProducts;
  if (!productId)
    return {};

  return currentProducts.find(product => product.id === productId);
}
