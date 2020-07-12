<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div 
        class="card m-1"
        v-for="post in postList" :key="post.index"
        >
        <img class="card-img-top" 
          :src="post.thumbnail" 
          :alt="post.title">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return {
      postList : []
    }
  },
  created(){
    axios.get("https://vuejs-axios-blog-78f95.firebaseio.com/posts.json")
      .then(response => {
        // console.log(response)
        let data = response.data;
        for(let key in data){
          this.postList.push({...data[key], id : key})
        }

      })
      .catch(e => console.log(e))
  }
}
</script>
<style>
  .card {
    width: 300px;
  }
</style>
