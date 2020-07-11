<template>
    <div>
        <div class="tag-container">    
      <Tag></Tag>
    <input 
      type="text" 
      @keydown.enter="addTag"
      @keydown.backspace="removeTag">
    <div class="error" v-if="error">bu etiket daha önceden eklenmiş!</div>
  </div>
    </div>
</template>
<script>
import Tag from "./Tag"
export default {
    components : {
        Tag : Tag
    },
    data(){
    return {
      tags : ["deneme", "test"],
      error : false,
    }
  },
}
</script>
<style scoped>
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
</style>