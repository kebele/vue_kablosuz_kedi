new Vue({
    el: "#app", //html de #app ı kontrol edeceğim
    data: {
      title: "vue 1",
      // title #app a göndereceğimiz datayı temsil ediyor
      description: "bu bir açıklamadır"
    },
    //methods da method ları koyduğumuz kısım, 
    //yukarısı data yani datalar, veriler, 
    //burası methodlar yani function lar
    //changeTitle bir function ve alert çalıştırıyor, 
    //inputta her karakter basışımızda bu function çalışacak
    methods: {
      changeTitle: function(event) {
        //alert();
          //buradan data ya ulaşmak için this kullanırız
          this.description = event.target.value
      }
    }
  });

  new Vue({
    el : "#app2",
    data : {
      title2 : "vue 2",
    },
    methods : {
      hello : function(){
        return "selamlar, cristiano ronaldo"
      }
    }
  });

  /* 
  el : 
  data : 
  methods : 
  yapıya dikkat
  html ydeki karşılığa yani string interpolation içine her şey string gelir, orada bir işlem olmaz, yani instance (js deki kod) string olarak atar

  */

  new Vue({
    el : "#app3",
    data : {
      title3 : "selam gareth bale",
      message : "hoş geldin, geç otur!",
      link : "https://www.yahoo.com/"
    },
    methods : {
      hello3 : function(){
        return this.title3 + " " + this.message
      }
    }
  })

  /* buradaki this kullanımı sadece içinde olduğu instance ı ifade eder
  diğer bir durum bir link yollayacağız a tag ına bunu yukarıdaki gibi yapamayız, yani attribute aktarmak yukarıdaki gibi olmaz
  bunun için attribute binding denir, daha sonra detay gelecek,
  burada html de attribute önüne bir ifade gireriz
  <a v-bind:href="link">yahoo</a>
  
  directive : vue da bir işlem yapmamızı sağlayan tanımlamalar gibi, vue kendi içinde bir çok built-in directive var, ayrıca kendi directive lerimizi de tanımlayabiliriz, bu ileride ... 
  kısaca directive "şu şu işlemi yap" der
  şimdi burada v-bind demek bağlamak demek, yani
  v-bind:href="link" ile diyoruz ki;
  href attribute unu instance daki link e bağla
  v-bind herhangibir attr u vue instance ındaki herhangiir property e bağlamamızı sağlar
   */

   new Vue({
     el : "#app4",
     data : {
       title4 : "merhaba dunya",
       link : "https://www.yahoo.com/",
       blogLink : "<a href='https://edition.cnn.com/'> CNN </a>"
     },
     methods : {
       hello4 : function(){
         this.title = "bon jour !!!"
         return this.title
       }
     }
   })

   /* 
   burada bir başka directive v-once kullandık,
   v-once dediğimizde title değeri data dan aldığı ile kaldı,
   ancak function içinde aynı değeri 
   this.title = "bon jour !!!"
   şeklinde değiştirip return ettik
   bunun sonucunda function yeni değeri kullandı, eğer v-once demeseydik, üstteki p de de yeni değeri kullanırdı. 
   çümkü function çağrıldığında yaptığı şey instance içindeki title değerini değiştirmek

   şimdi blogLink tanımladık ancak bunu html kod olarak tanımladık, bunu ekrana basmak için tag ın içine v-html yazarız
   <p v-html="blogLink"></p>
   
   */