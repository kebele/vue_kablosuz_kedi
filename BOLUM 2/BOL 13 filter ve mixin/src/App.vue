<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | toUppercase | toLowercase }}</p>
        <hr />
        <input type="text" v-model="searchText" placeholder="search"/>
        <ul>
          <!-- <li v-for="product in products" :key="product.id">{{ product }}</li> -->
          <li v-for="product in filtered" :key="product.id">{{ product }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import FilterList from './FilterList'
import { productMixin } from './productMixin'

export default {
  components : {
    appList : FilterList
  },
  data() {
    return {
      message: "selamlar kablosuzkedi | videosinif",
      // products: ["monitor", "klavye", "masa", "kitap", "şise", "hard disk"],
      //mixin de olduğu için yoruma aldım
      searchText: "",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  //mixin de old. için yoruma aldım
  // computed: {
  //   filtered(){
  //     return this.products.filter((element)=>{
  //       return element.match(this.searchText);
  //     })
  //   }
  // },
  mixins : [productMixin],
  created(){
    console.log("App.vue cretaed çalıştı")
  }
};
</script>

<style></style>
