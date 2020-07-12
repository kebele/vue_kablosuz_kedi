<template>
  
    <div class="tag-container">
      <Tag 
        v-for="(tag, index) in tags" 
        :key="tag.index" 
        :index="index"
        :tag="tag"
        :tagColor="color"
        @removeOneTagEvent="removeOneTag($event)"
        />
      <input
        type="text"
        @keydown.enter="addTag"
        @keydown.backspace="removeTag"
      />

      <div class="error" v-if="error">bu etiket daha önceden eklenmiş!</div>
    
  </div>
</template>
<script>
import Tag from "./Tag";

export default {
  components: {
    Tag: Tag,
  },
  data() {
    return {
    //   tags: ["deneme", "test"],
      tags: [],
      error: false,
    };
  },
  methods: {
    addTag(event) {
      let text = event.target;
      let matchedTag = false;

      if (text.value.length > 0) {
        this.tags.forEach((tag) => {
          if (tag.toLowerCase() === text.value.toLowerCase()) {
            matchedTag = true;
          }
        });

        if (!matchedTag) {
          this.tags.push(text.value);
        //   this.$emit("input", this.tags.join(","));
          text.value = "";
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      }
    },
    removeTag(e) {
      if (e.target.value <= 0) {
        this.tags.splice(this.tags.length - 1, 1);
      }
    },
    removeOneTag(index) {
      this.tags.splice(index, 1);
    },
  },
  props : {
      value : {
          required : false
      },
      color : {
        type : String,
        required : false,
        default : "primary"
      }
  },
  created(){
      if(this.value){
          if(this.value.length > 0){
              //eğer bir value değeri geldiyse ve bunun zızınluğu 0 dan büyükse o zaman bu geleni virgülden ayırmamız lazım
              this.tags = this.value.split(",")
              //virgülden ayır ve sonucu array yap dedik
          }
      }
  },
  watch : {
      tags(){
          this.$emit("input", this.tags.join(","))
      }
  }
};
</script>
<style scoped>
.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

input {
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
