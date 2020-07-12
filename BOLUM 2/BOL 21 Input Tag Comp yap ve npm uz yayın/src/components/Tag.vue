<template>
  <!-- <span class="tag" v-for="(tag, index) in tags" :key="tag.id"> -->
  <span class="tag" :class="selectedTheme">
    <span class="content">{{ tag }}</span>
    <!-- <span class="close" @click="removeOneTag(index)">X</span> -->
    <span class="close" @click="$emit('removeOneTagEvent', index)">X</span>
  </span>
</template>
<script>
export default {
  props: ["tag", "index", "tagColor"],

  data() {
    return {
      selectedTheme: null,
    }
  },
  created() {
    this.selectedTheme = this.tagColor
  },
};
</script>

<style scoped>

.primary {
  color: #004085;
  background-color: #cce5ff;
  border-color: #b8daff;
}

.danger {
   background-color : #ff4444
}
.warning {
   background-color : #ffbb33
}
.success {
   background-color : #00C851
}
.info {
   background-color : #5bc0de
}

.tag {
  padding: 10px;
  /* background-color: #fbbb08;
  color: #000; */
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
