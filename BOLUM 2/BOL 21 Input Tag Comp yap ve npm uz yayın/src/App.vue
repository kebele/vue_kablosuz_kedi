<template>
  <div class="tag-container">
    <span class="tag" v-for="(tag, index) in tags" :key="tag.id">
      <span class="content">{{ tag }}</span>
      <span 
        class="close" 
        @click="removeOneTag(index)"
        >X
      </span>
    </span>
    <!-- <input type="text" @keydown.enter="tags.push($event.target.value)"> -->
    <input 
      type="text" 
      @keydown.enter="addTag"
      @keydown.backspace="removeTag">
    <div class="error" v-if="error">bu etiket daha önceden eklenmiş!</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tags : ["deneme", "test"],
      error : false,
    }
  },
  methods: {
    addTag(event){
      let text = event.target;
      let matchedTag = false;

      if(text.value.length > 0){

        this.tags.forEach(tag => {
          if(tag.toLowerCase() === text.value.toLowerCase()){
            matchedTag = true;
          }
        });

        if(!matchedTag){
          this.tags.push(text.value);
          text.value = "";
        } else {
          this.error = true
          setTimeout(() => {
            this.error = false
          }, 2000);
        }




      }
    },
    removeTag(e){
      if(e.target.value <= 0){
        this.tags.splice(this.tags.length - 1, 1)
      }
    },
    removeOneTag(index){
      this.tags.splice(index, 1)
    }
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
  }
  .tag-container{
    border: 1px solid #ccc;
    padding: 20px;
  }

  input{
    outline: none;
    height: 30px;
    width: 100px;
  }

  .error {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }

  .tag{
    background-color: #fbbb08;
    padding: 10px;
    color: #000;
    cursor: default;
    font-size: 14px;
    margin-right: 10px;
  }

  .tag .close {
    font-size: 12px;
    cursor: pointer;
  }
</style>