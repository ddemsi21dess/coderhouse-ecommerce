
import { menuItems } from '../data/menuItems.js';

export const getCategoryId = ( id ) => {
  if (!id) 
    return null
  
  return menuItems.find(item => item.id === id).categoryId;

}
