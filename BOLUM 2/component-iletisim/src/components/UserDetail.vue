<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>kullanıcı adı : {{ name }}</p>
  </div>
</template>
<script>
export default {
  props : ["name"]
}
  </script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

/* 
dışarıdan gelecek dataları burada props ile alırız
props : ["","","",""]
props her zaman bir arraydir, bu şekilde array içinde string şeklinde tanımlanır
bizim burada dışarıdan almak istediğimiz veri name
bunu burada tanımladığımızda/hazırladığımızda artık burada sanki data(){} içerisinde tanımlanmış gibi davranmaya başlar
artık dışarıdan name isimli bir veriyi kabul etmeye başladı
şimdi bu veriyi parent tan yani User.vue dan alacak, oraya gidip bunu dışarıya gönderelim

 */