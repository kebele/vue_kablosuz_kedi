/* 
neler data olabilir?
sağlıklar, hem benim hem canavarın

neler method olabilir?
butonların her biri ayrı aksiyonlar, 

sonra bunları html de yerlerine koyalım, butonlara atayalım,
@click="start_game" şeklinde

oyun başlamadığında oyun tuşları kısmı ve logların gösterileceği kısmın görünmemesi lazım, oyunun başlayıp başlamadığını gösterecek bir değişken data içine tanımlayacağız, game_is_on : false dedik, oyun baladığında true olacak ve buna bağladığımız iki panel görünür hale gelecek
yani yeni oyun paneli game_is_on false iken görünecek, buna tıkladığımızda game_is_on değeri true olacak ve değeri ture isteyen paneller görünür hale gelecek, bu değişimi start_game methodu ile yapacağız,

tuşları kodlayalım, 
açıklamalar method lar içindeki functionlarda 

artık heal ların html de barlar üzerinde gösterilmesi
{{player_heal}} şeklinde yaptık, progress bar ın boyutunu ise css de ..healthbar ın width ini değiştirdikçe boyu da değişecek, bunda da heal değerini buraya da atayacağız
<div :style="{width : player_heal + '%'}" class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                    {{player_heal}}%
                </div>
şeklinde yaptık

şimdi heal ların 0 ve 100 arasında kalmalı dışarı çıkmamalı
yani heal ları izleyip onların değerine göre davranacak kodlara ihtiyacımız var, reactive property ler içinde olan 
 watch: {
      //bir değişkenin değerini izleyip o değere göre aksiyon aldırır
      player_heal : function(value){
          if(value <= 0){
              this.player_heal = 0;
          } else if(value >=100){
              this.player_heal = 100
          }
      },
      monster_heal : function(value){
        if(value <= 0){
            this.monster_heal = 0;
        } 
      }
  },

  şimdi artık oyunu yeniden başlatma, player_heal = 0 olduysa
  confirm("oyunu kaybettin") şeklinde bir mesaj kutusu yollayalım, bu bir boolean döner,... 

  logları ekleyelim;
  şimdi css dosyasında var .player-turn ve .monster-turn classları var 
  bunun için bu logları tutabileceğimiz bir data ya ihtiyacımız var logs: [{turn : "", text :""}]
  logları aldık ancak yeni oyunla beraber log ların da silinmesi baştan başlaması lazım bunun için watch da this.logs = [] yapmalıyız

  şimdi log kısmının eğer log varsa görnmesini yapalım
v-if="logs.length > 0"






*/

new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    monster_heal: 100,
    game_is_on: false,
    // logs: [{turn : "", text :""}]
    logs : [],
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      /* burada biz bir saldırı yapacağız, monster canı azalacak random miktarda hemen sonra monster_attack çalışacak ve canavarda random bir saldırı yapacak buda bizim canımızı azaltacak */
      let point = Math.ceil(Math.random() * 10);
      // alert(point);
      this.monster_heal -= point;
      this.add_to_log({ turn : "p", text : "oyuncu atağı (" + point + ")"})   
      this.monster_attack();
      // console.log("m :" + this.monster_heal)
      // console.log("p :" + this.player_heal)
         
    },
    special_attack: function () {
      /* random kısmın range i fazla olsun, bu şekilde randomdan gelecek miktar büyük olsun*/
      let point = Math.ceil(Math.random() * 25);
      this.monster_heal -= point;
      this.add_to_log({ turn : "p", text : "ozel oyuncu atağı (" + point + ")"})  
      this.monster_attack();
      //  console.log("m :" + this.monster_heal)
      //  console.log("p :" + this.player_heal)
    },
    heal_up: function () {
      /* burada da canımzı yine random olarak yükseltsin, ama bu kararda bizim heal ımız random miktarda artacak ama monster bu sırada yine saldıracak */
      let point = Math.ceil(Math.random() * 20);
      this.player_heal += point;
      this.add_to_log({ turn : "p", text : "ilk yardım (" + point + ")"})  
      this.monster_attack();
      //  console.log("m :" + this.monster_heal)
      //  console.log("p :" + this.player_heal)
    },
    give_up: function () {
      /* vazgeçmek demek */
      this.player_heal = 0;
      // console.log("m :" + this.monster_heal)
      //  console.log("p :" + this.player_heal)
      this.add_to_log({ turn : "p", text : "oyuncu pes etti"})  
    },
    monster_attack: function () {
      let point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
      this.add_to_log({ turn : "m", text : "canavar atağı (" + point + ")"})  
    },
    add_to_log : function(log){
        this.logs.push(log);
    }
  },
  watch: {
      //bir değişkenin değerini izleyip o değere göre aksiyon aldırır
      player_heal : function(value){
          if(value <= 0){
              this.player_heal = 0;
              if(confirm("oyunu Kaybettin, tekrar deneyecek misin?")){
                 this.player_heal = 100;
                 this.monster_heal = 100;
                 this.logs = [];
              }
          } else if(value >=100){
              this.player_heal = 100
          }
      },
      monster_heal : function(value){
        if(value <= 0){
            this.monster_heal = 0;
            if(confirm("oyunu kazandın, yeniden deneyecek misin?")){
                this.player_heal = 100;
                 this.monster_heal = 100; 
                 this.logs = [];
            }
        } 
      }
  },
});
