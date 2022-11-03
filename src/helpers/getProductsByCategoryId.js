export const getProductsByCategoryId = (categoryId, products) => {
  if (!categoryId)
    return products;

  return products.filter(product => product.categoryId === categoryId);
}
