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