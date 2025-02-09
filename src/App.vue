<template>
  <v-app>
    <header>
      <Header />
      <NavHeader />
    </header>
    <div class="body">
      <Center />
    </div>
  </v-app>
</template>

<script setup>
import Center from './components/Center.vue';
import Header from './components/Header.vue';
import NavHeader from './components/NavHeader.vue';
  //
</script>
<style scoped>
header{
  background: #0F7AC0;
}
.body{
  background: #F6B519;

}
</style>
