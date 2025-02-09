<template>
  <div class='container'>
    <header>
        <img src="../assets/IMG/LOGO.png"  alt="">
        
        <div class="ops">
            <p>💬Fale Conosco</p>
        </div>
    </header>
  </div>
</template>

<script setup>
</script>

<style scoped>
    .container{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    color: rgb(75, 88, 88);
    font-weight: 800;
    }
    header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 90%;
    border-radius: 20px;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    img{
      height: 40px;
    }
    .ops{
      font-weight: 900;
        font-family: Arial, Helvetica, sans-serif;
        font-size: .9rem; 
        color: #333; 
        cursor: pointer;
    }
    .ops p:hover {
        color: #007BFF; 
    }
</style>