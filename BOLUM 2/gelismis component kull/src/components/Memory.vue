<template>
  <div>
    <!-- <p class="text-center"> Bu çok güzel bir anıdır...</p> -->
    <!-- eğer kapsamlı bir html göndermek istersek     
    <p class="text-center">{{ content }}</p> 
    -->
    <div class="memory">
      <slot name="heading"></slot>
    </div>
    <div class="memory">
      <slot name="content"></slot>
    </div>
    <div class="memory">
      <slot name="author">
        <h3>yazar</h3>
        <p>buraya herhangibir içerik gelmemiş</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  // props : ["content"]
};
</script>
<style scoped>
/* scoped sadece burada geçerli olsun */
div.memory {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>
