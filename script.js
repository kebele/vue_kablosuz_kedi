new Vue({
    el: "#app", //html de #app ı kontrol edeceğim
    data: {
      title: "merhaba VUE, bakalım",
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