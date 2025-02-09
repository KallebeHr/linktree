<template>
  <div class="container">
    <!-- Lista de categorias -->
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </li>
    </ul>

    <!-- Exibir produtos filtrados por categoria -->
    <swiper
      :spaceBetween="60"
      :slidesPerView="2.5"
      :breakpoints="breakpoints"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(product, index) in filteredProducts" :key="index">
        <div class="product-card">
          <div class="product-image">
            <div class="quadrado"></div>
          </div>
          <div class="product-name">
            <h3>{{ product.name }}</h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Lista de categorias
    const categories = [
      'Todos',
      'Presentes',
      'Casais',
      'Eletronicos',
      'Beleza',
      'Papelaria',
      'Casa e Construção',
      'Esportes e Lazer',
    ];

    // Dados fictícios dos produtos
    const products = [
      { name: 'Produto 1', image: 'https://via.placeholder.com/200', category: 'Eletronicos' },
      { name: 'Produto 2', image: 'https://via.placeholder.com/200', category: 'Beleza' },
      { name: 'Produto 3', image: 'https://via.placeholder.com/200', category: 'Presentes' },
      { name: 'Produto 4', image: 'https://via.placeholder.com/200', category: 'Casais' },
      { name: 'Produto 5', image: 'https://via.placeholder.com/200', category: 'Papelaria' },
      { name: 'Produto 6', image: 'https://via.placeholder.com/200', category: 'Casa e Construção' },
      { name: 'Produto 7', image: 'https://via.placeholder.com/200', category: 'Esportes e Lazer' },
      { name: 'Produto 8', image: 'https://via.placeholder.com/200', category: 'Eletronicos' },
    ];

    // Estado para a categoria selecionada
    const selectedCategory = ref('Todos');

    // Função para selecionar a categoria
    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    // Computed para filtrar os produtos com base na categoria selecionada
    const filteredProducts = computed(() => {
      if (selectedCategory.value === 'Todos') {
        return products;
      }
      return products.filter((product) => product.category === selectedCategory.value);
    });

    // Configurações de responsividade
    const breakpoints = {
      320: {
        slidesPerView: 2.5, // 2,5 slides no celular
      },
      768: {
        slidesPerView: 4, // 4 slides no desktop
      },
    };

    return {
      modules: [Autoplay, Pagination, Navigation],
      categories,
      products,
      breakpoints,
      selectedCategory,
      selectCategory,
      filteredProducts,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
}

ul {
  list-style: none;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 5rem;
  color: black;
  text-align: center;
}

li {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

li.active {
  background-color: #f6b519;
  color: white;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.product-image .quadrado {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-name {
  padding: 10px;
  text-align: center;
}

.product-name h3 {
  font-size: 16px;
  margin: 0;
  color: #333;
}

.swiper {
  width: 100%;
  padding: 10px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>