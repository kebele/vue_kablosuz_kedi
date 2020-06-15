<template>
  <div>
    <!-- <h1>sunucu durumu : {{ status }}</h1>   -->
    <lamp-component />
  </div>
</template>

<script>
/* 
//COMPONENT YAPISI BOLUMUNDE 2. KISIM

App.vue bizim ana (root) componentimiz

  burada
  data : 
  component : 
  watch: 
  computed :
  bir vue instance ı içinde ne varsa burada tanımlayabiliriz
  uygulamamnın busines logic i burada yapılır,
  ancak eğer burada bir static olacaksa bu dosyada yani bir logic vb. bir şey yoksa buraya bir şey tanımlamamıza ihtiyac yok
  data : tanımlanması biraz farklı sadece
  style kısmıda aynı şekilde eğer ihtiyacımız yoksa kalkabilir
  script e de ihtiyacımız yoksa kalkabilir, template must mutlaka olmalı

  şimdi data ile işlem yapalım biraz

içinde olduğumuz dosya App.vue bizim root componentimizdir

yeni bir component oluşturalım

bir componentte 
template mutlaka olacak
script eğer bir logic kullanacaksak js kodu olacaksa (kod template içinede yazılabilr) olmalı ama şart değil
style bu da eğer stil işlemi olacaksa olmalı yoksa bu da şart değil

<lamp-component /> kullandık, demek ki böyle bir component var veya yapacağız

bu main js e koyduk orada da dedik ki Lamp-component yap ve bunun verisini Home.vue dan al

şimdi bir lampStatus.vue yaptık, bunun içinde lambanun durumu ve lambayı açacak buton var, bu lambanın bulunduğu satırı verecek

bunu export edeceğiz data içinde lambanın status unu tanımladık default kapalı
ayrıca methods içinde de bu status u değiştrecek methodu koyduk
bunu export ettik yani artık kullamka istediğimiz yerde import ederek kullanabiliriz, şu anda herhangibir parametre almadıklarına dikkat

Home.vue da LampStatus.vue yu import ettik ve components içindede tanımladık, bu da burada ben bunu comp olarak kullanacağım demek ve bunu template içine yazdık, içine 5 kez aynı işlemi yapsın diye v-for yazdık

  */
export default {
  // data (){
  //   return {
  //     status : "pasif"
  //   }
  // }
};
</script>

<style></style>
