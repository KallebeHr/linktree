<template>
  <div class="container">
    <!-- Lista de categorias -->
    <div class="categories-container">
      <!-- Swiper para categorias em telas menores -->
      <swiper
        v-if="isMobile"
        :slidesPerView="2.5"
        :spaceBetween="10"
        class="categories-swiper"
      >
        <swiper-slide
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(category)"
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </swiper-slide>
      </swiper>

      <!-- Lista horizontal para telas maiores -->
      <ul v-else>
        <li
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(category)"
          :class="{ active: selectedCategory === category }"
        >
          {{ category }}
        </li>
      </ul>
    </div>

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
            .quadrado
          </div>
          <div class="product-name">
            <h3>{{ product.name }}</h3>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Importações
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useProductStore } from '@/stores/productStore'; // Importe o store
import { computed, ref, onMounted, onUnmounted } from 'vue';

// Configurações do Swiper
const modules = [Autoplay, Pagination, Navigation];

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

// Configurações de responsividade
const breakpoints = {
  320: {
    slidesPerView: 2.5,
  },
  768: {
    slidesPerView: 4,
  },
};

// Acesse o store
const productStore = useProductStore();

// Acesse os produtos filtrados e a categoria selecionada
const filteredProducts = computed(() => productStore.filteredProducts);
const selectedCategory = computed(() => productStore.selectedCategory);

// Função para selecionar a categoria
const selectCategory = (category) => {
  productStore.setSelectedCategory(category);
};

// Verificar se é mobile
const isMobile = ref(window.innerWidth <= 768);

// Atualizar o estado de isMobile ao redimensionar a janela
const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  flex-direction: column;
}

.categories-container {
  width: 98%;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.categories-swiper {
  width: 100%;
  padding: 10px;
}

.categories-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
    
}

.categories-swiper .swiper-slide.active {
  color: #f6b519;
  background-color: rgb(255, 255, 255);

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