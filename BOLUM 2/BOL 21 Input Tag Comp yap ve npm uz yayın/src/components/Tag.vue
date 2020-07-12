<template>
  
    <!-- <span class="tag" v-for="(tag, index) in tags" :key="tag.id"> -->
    <span class="tag">
      <span class="content">{{ tag }}</span>
      <!-- <span class="close" @click="removeOneTag(index)">X</span> -->
      <span class="close" @click="$emit('removeOneTagEvent', index)">X</span>
    </span>
  
</template>
<script>
export default {
    props : ["tag", "index"]
};
</script>

<style scoped>
.tag {
  background-color: #fbbb08;
  padding: 10px;
  color: #000;
  cursor: default;
  font-size: 14px;
  margin-right: 10px;
}

.tag * {
  font-size: 14px;
}

.tag .close {
  font-size: 12px;
  cursor: pointer;
}
</style>