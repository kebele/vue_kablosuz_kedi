<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr />
<app-new-product></app-new-product>
    <br />
    <br />
<app-progress></app-progress>
    <br />
    <br />
    <!-- <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr /> 
    v-if ile yapacağız, ürün yoksa bu kısım görünmeyecek-->
<app-products></app-products>
</div>
</template>

<script>

import NewProduct from './components/NewProduct';
import Progress from './components/Progress';
import Products from './components/Products';

export default {
  components : {
    appNewProduct : NewProduct,
    appProgress : Progress,
    appProducts : Products,
  },
  // data() {
    // return {
      // productList: [], bu yeni yapıda Products.vue da tanımlanmalı, açıklamalar.txt de açıklaması
      // product: {
        // selectedImage: null
      // }
    // };
  // }, data komple gidecek burada tanımlanmış olan product ta sadece img kalmıştı bu da NewProduct.vue ya gitmeli
  // methods: {
  //   onChange(e) {
  //     const file = e.target.files[0];
  //     this.product.selectedImage = URL.createObjectURL(file);
  //   }
  // } bu da newProduct.vue ya gitti
};
</script>

<style>
body {
  background-color: aliceblue;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card {
  margin-right: 5px;
  margin-bottom: 5px;
}

.card:last-child {
  margin-right: 0px;
}

.col-md-2 {
  max-width: 15.666667% !important;
}

.product-container {
  margin-left: 15px;
}
</style>

