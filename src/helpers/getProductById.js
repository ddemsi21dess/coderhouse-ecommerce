import { products } from '../data/products';


export const getProductById = (id) => {
  
  if (!id)
    return {};

  return products.find(product => product.id === id);
};

