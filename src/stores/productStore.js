// stores/productStore.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Produto 1', category: 'Eletronicos', image: 'https://via.placeholder.com/200' },
      { id: 2, name: 'Produto 2', category: 'Beleza', image: 'https://via.placeholder.com/200' },
      { id: 3, name: 'Produto 3', category: 'Presentes', image: 'https://via.placeholder.com/200' },
      { id: 4, name: 'Produto 4', category: 'Casais', image: 'https://via.placeholder.com/200' },
      { id: 5, name: 'Produto 5', category: 'Papelaria', image: 'https://via.placeholder.com/200' },
      { id: 6, name: 'Produto 6', category: 'Casa e Construção', image: 'https://via.placeholder.com/200' },
      { id: 7, name: 'Produto 7', category: 'Esportes e Lazer', image: 'https://via.placeholder.com/200' },
      { id: 8, name: 'Produto 8', category: 'Eletronicos', image: 'https://via.placeholder.com/200' },
    ],
    selectedCategory: 'Todos',
  }),
  getters: {
    filteredProducts: (state) => {
      if (state.selectedCategory === 'Todos') {
        return state.products;
      }
      return state.products.filter((product) => product.category === state.selectedCategory);
    },
  },
  actions: {
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
});