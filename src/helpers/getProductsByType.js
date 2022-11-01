import { products } from '../data/products';


export const getProductsByType = (type) => {
  
  if (!type)
    return products;

  return products.filter(product => product.type === type);
}
