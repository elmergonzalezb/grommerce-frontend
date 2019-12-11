import { observable, action } from 'mobx';
import { products } from '../Data/products';
import { createContext } from 'react';

class Products {
  @observable allProducts = products;
  @observable searchedProducts = products;

  @action searchItems(search: string) {
    this.searchedProducts = products.filter(product => {
      const searchItem = search.toLowerCase();
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      return (
        productName.includes(searchItem) ||
        productDescription.includes(searchItem)
      );
    });
  }
}

const productsStore = new Products();

export const ProductStoreContext = createContext(productsStore);
