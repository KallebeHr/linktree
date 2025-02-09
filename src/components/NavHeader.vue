<template>
    <div class="container">
        <p>Clique no produto e seja direcionado para a loja oficial com segurança e sem enganações!</p>
        <h2>Mais Vendidos</h2>
        <swiper
        :spaceBetween="30"
        :slidesPerView="2.5"
        :breakpoints="breakpoints"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide v-for="(product, index) in products" :key="index">
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
    <p>+1200 vendas mensais</p>
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
      // Dados fictícios dos produtos
      const products = [
        { name: 'Produto 1', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 2', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 3', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 4', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 5', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 6', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 7', image: 'https://via.placeholder.com/200' },
        { name: 'Produto 8', image: 'https://via.placeholder.com/200' },
      ];
  
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
        products,
        breakpoints,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 10px;
    height: auto;
  }
  
  h2 {
    margin-bottom: 20px;
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
  p{
    color: #F6B519;
    font-weight: bold;
    text-align: center;

  }
  </style>