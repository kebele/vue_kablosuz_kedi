<template>
  <div>
    <app-header></app-header>
    <!-- <app-container></app-container> -->
    <transition name ="fade" mode = "out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div> 
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import ProductPurchase from './components/products/ProductPurchase'
import ProductSell from './components/products/ProductSell'
import ProductList from './components/products/ProductList'

export default {
  components : {
    appHeader : Header,
    appFooter : Footer,
    // appProductPurchase : ProductPurchase,
    // appContainer : ProductSell,
    appContainer : ProductList,
  },
  created(){
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
} 
</script>

<style>
  body {
    background-color: #1dd1a1;
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-out;
  }
  .fade-leave{}
  .fade-leave-active{
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>