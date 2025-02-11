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
            <a :href="product.link" target="_blank" class="buy-button">Comprar</a>

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


import espelho from "../assets/IMG/espelho.png"
import umidificador from "../assets/IMG/umidificador.png"
import videogame from "../assets/IMG/videogame.png"
import cozinha from "../assets/IMG/cozinha.png"
import ml from "../assets/IMG/400ml.png"
import Ferramentas from "../assets/IMG/Ferramentas.png"
import tapete from "../assets/IMG/tapete.png"






export default {
components: {
  Swiper,
  SwiperSlide,
},
setup() {
  
  const products = [
  { name: 'Espelho Redondo Adnet 30cm Com Alça', image: espelho, price: 'R$ 34,90', link: 'https://s.shopee.com.br/8fDPxvD5MX'},
    { name: 'Mini Umidificador Difusor Aromatizador', image: umidificador, price: 'R$ 16,99', link: 'https://s.shopee.com.br/4VNr0RK6Xc' },
    { name: 'Videogame Stick 10mil 2 Controles Sem Fio', image: videogame, price: 'R$ 93,99', link: 'https://s.shopee.com.br/1B7P2YvX6o' },
    { name: 'Torneira Gourmet Com Filtro Slim para Cozinha', image: cozinha, price: 'R$ 108,88', link: 'https://s.shopee.com.br/20gW295aLz' },
    { name: '400ML 6 Lâminas Espremedor Elétrico Mini Liquidificador', image: ml, price: 'R$ 32,88', link: 'https://s.shopee.com.br/vReiOjs0' },
    { name: 'Ferramentas 46 Peças Jogo De Soquetes', image:Ferramentas , price: 'R$ 33,50', link: 'https://s.shopee.com.br/6V8vOqdY12' },
    { name: 'Tapete Banheiro Antiderrapante Absorvente de Secagem Rápida', image:tapete , price: 'R$ 19,00', link: 'https://s.shopee.com.br/6KpVCew7EQ' },
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
  width: 100%; /* Garante que o contêiner ocupe todo o espaço disponível */
  height: 150px; /* Altura fixa para o contêiner */
  overflow: hidden; /* Evita que a imagem ultrapasse o contêiner */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  z-index: 2; /* Coloca a imagem acima do pseudo-elemento ::after */
}

.product-image img {
  width: 100%; /* A imagem ocupa 100% da largura do contêiner */
  height: 100%; /* A imagem ocupa 100% da altura do contêiner */
  object-fit: cover; /* Garante que a imagem cubra o contêiner sem distorcer */
  border-radius: 10px;
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
text-decoration: none;
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