
import {localProducts} from '../data/products.js';

export const getProductsByCategoryId = (categoryId, products) => {
  //If the api fails, the products will be the local.
  const currentProducts = products ? products : localProducts;
  if (!categoryId)
    return currentProducts;

  return currentProducts.filter(product => product.categoryId === categoryId);
}
