<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>kullanıcı adı : {{ name }}</p>
    <p>kullanıcı adı tersten: {{ switchName() }}</p>
    <p>kullanıcı yaşı : {{ age }}</p>
    <button @click="sendToParent">veriyi PARENT'a gönder</button>
  </div>
</template>
<script>
export default {
   //props : ["name"],
  //props validation
  //props : {
    //name : [String, Array]
    //name sadece string veya array olabilir, yoksa hata verir
    //smylede olabilir
    // name : {
    //   type : String,
    //   default : "real madrid"
    // }
  //},
  props : {
    name : {
      type : String,
      default : "www.google.com"
    }, 
    age : String
  },
  methods: {
    switchName(){
      return this.name.split("").reverse().join("");
    }, 
    sendToParent(){
      this.$emit("data", "alessandro del piero");
      //this.$emit(key, value)
    }
  },
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

ayrıca props u method içinde de kullanabiliriz, çünkü ukarıda dediğimiz gibi bunun data daki veriden bir farkı yok artık

şimdi burada bu türden kulanımlarda yani ordan veria lıyor burada işliyor yolluyor vb. burda belli durumlara dikkat etmek lazım mesela name olarak User.vue dan buraya integer yollarsak butun komponent geçersin olur sayfaya basmaz ve hata verir başka durumlarda olabilir o yüzden bazı kurallara uymalıyız

props ile aldığımız verileri validate(kontrol) edebiliriz, bunu yukarıdaki gibi yapabiliriz, [array için props un hangi türlerde olabileceğini yazarız]

yukarısı PARENT to CHILD buna dikkat

şimdi ise CHILD to PARENT veri iletişimi
bunun için custom event ten yararlanacağız
şimdi bir buton ve içine "veriyi PARENT'a gönder"
içine @click="sendToParent" yptık, yani tıklayınca bu method çalışacak, methods ta da bunu tanımlayalım
bunun için özel bir method olan $emit() kullanacağız,
$emit() bizim belirlediğimiz kriterlerde veri yayar
sendToParent (){
  this.$emit()
}

 */