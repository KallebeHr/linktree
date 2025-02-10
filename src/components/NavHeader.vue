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
        <div class="card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" class="quadrado">
          </div>
          <div class="product-info">
            <div class="product-name">
              <h3>{{ product.name }}</h3>
            </div>
            <div class="product-price">
              <p>{{ product.price }}</p>
            </div>
            <button class="buy-button">Comprar</button>
          </div>
        </div>
      </swiper-slide>
  </swiper>
  <p class="vendas">+800 vendas mensais</p>
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
    { name: 'Produto 1', image: 'https://via.placeholder.com/200', price: 'R$ 99,99' },
    { name: 'Produto 2', image: 'https://via.placeholder.com/200', price: 'R$ 149,99' },
    { name: 'Produto 3', image: 'https://via.placeholder.com/200', price: 'R$ 199,99' },
    { name: 'Produto 4', image: 'https://via.placeholder.com/200', price: 'R$ 249,99' },
    { name: 'Produto 5', image: 'https://via.placeholder.com/200', price: 'R$ 299,99' },
    { name: 'Produto 6', image: 'https://via.placeholder.com/200', price: 'R$ 349,99' },
    { name: 'Produto 7', image: 'https://via.placeholder.com/200', price: 'R$ 399,99' },
    { name: 'Produto 8', image: 'https://via.placeholder.com/200', price: 'R$ 449,99' },
  ];

  // Configurações de responsividade
  const breakpoints = {
    320: {
      slidesPerView: 1.7, 
    },
    768: {
      slidesPerView: 4, 
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
align-items: center;
flex-direction: column;
overflow: hidden;
height: 60vh;
}

h2 {
margin-bottom: 20px;
}

.card {
width: 190px;
height: 300px;
background: whitesmoke;
position: relative;
display: flex;
flex-direction: column;
place-content: center;
place-items: center;
overflow: hidden;
border-radius: 20px;
padding: 10px;
}

.card::before {
content: '';
position: absolute;
width: 100px;
background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
height: 130%;
animation: rotBGimg 3s linear infinite;
transition: all 0.2s linear;
}

@keyframes rotBGimg {
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
}

.card::after {
content: '';
position: absolute;
background: whitesmoke;
inset: 5px;
border-radius: 15px;
}

.product-image {
width: 100%;
height: 150px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
}

.product-image img {
width: 100%;
height: 100%;
object-fit: cover;
}

.product-info {
text-align: center;
z-index: 1;
color: white;
}

.product-name h3 {
font-size: 16px;
margin: 10px 0;
color: black;
}

.product-price p {
font-size: 14px;
margin: 5px 0;
}

.buy-button {
background-color: #F6B519;
color: #07182E;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
font-weight: bold;
margin-top: 10px;
}

.buy-button:hover {
background-color: #e0a317;
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

p {
color: #F6B519;
font-weight: bold;
text-align: center;
}
</style>