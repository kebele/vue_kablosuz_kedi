<template>
    <div>
        <hr />
        <input type="text" v-model="searchText" placeholder="search"/>
        <ul>         
          <li v-for="product in filtered" :key="product.id">{{ product }}</li>
        </ul>
    </div>
</template>


<script>

import { productMixin } from './productMixin'

export default {
  //mixin olarak kullanmak için aldık

  // data() {
  //   return {      
  //     products: ["monitor", "klavye", "masa", "kitap", "şise", "hard disk"],
  //     searchText: "",
  //   };
  // },
  // computed: {
  //   filtered(){
  //     return this.products.filter((element)=>{
  //       return element.match(this.searchText);
  //     })
  //   }
  // },
  mixins : [productMixin]
};
</script>