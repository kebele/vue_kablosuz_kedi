<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">adımı değiştir</button>
    <p>Child üzerinden gelen veri {{ childData }}</p>
    <p>kullanıcı yaşı : {{ age }}</p>
    <hr />
    <div class="row">
      <!-- <app-user-detail name="rafael varane"></app-user-detail> -->
      <app-user-detail
        :age="age"
        @data="childData = $event"
        :name="title"
      ></app-user-detail>
      <app-user-edit @ageWasEdited="age = $event" :age="age"></app-user-edit>
    </div>
  </div>
</template>
<script>
import UserDetail from "./UserDetail";
import UserEdit from "./UserEdit";
export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data() {
    return {
      title: "ronaldo",
      childData: "",
      age: "25",
    };
  },
  methods: {
    changeName() {
      this.title = "sergio";
    },
  },
};
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

/* istediğimiz şu butona tıkladığımızda title değerinin UserDatei.vue daki name
e gitmesi, yani parent tan child a data transferi şimdi burada yapacağımız şey;
UserDetail.vue nun component adı appUserDetail, bunu da
<app-user-detail name="rafael varane"></app-user-detail>
şeklinde kullandık, içine name="" yazdık, işte bu name bu componente gidecek
demek, zaten UserDetail.vue içinde de name yakalayacağımızı belirlemiştik.
name="rafael varane" yi UserDetail.vue yakaladı ikinci durumda eğer buradaki
data daki title ı göndermek istiyorsak name i title a bind etmemiz lazım, yani
:name="title" şeklinde bunu yaptığımızda bu sefer de ronaldo yu yollamış oluruz
burada butona basarsak title değeri değişecek sergio olacak bu durumda kullanıcı
adı da sergio şeklinde değişmiş olacak burada yaptığımız şey PARENT to CHILD
buna dikkat Artık CHILD TO PARENT veri iletişmi bunun için yularıya
<p>{{ dataChild }}</p>
ekledik CHILD to CHILD veri akışı mümkün değil, veriler yukarıdan aşağı veya
aşağıdan yukarıya akar Normal veri akışı şöyle parent to child ...> parent ta
data da tuttuğumuz veri child a props ile gidiyor (yukarıdaki title) child to
parent ...>custom event ilechild içinde $emit(key, value) diyoruz, bunu parentte
@data= "childData = $event" $event ile yakalayıp, kullanacağımız yerde
(componentin elementinde) childData adıyla kullanıyoruz şimdi child dan
aldığımız bu veriyi başka bir child a yine props olarak gönderebiliriz şimdi
bunu bir yapalım child 1 den - parent a - orandan da child 2 ye gönderelim
veriyi, normalde istediğimiz şey child1 - child2 ye şeklindeydi , ama böyle
yapmalıyız 1. data ya age tanımlayalım ve bunu UserDetail.vue ya geçirelim aynı
zamanda element üzerindende gsterelim

<app-user-detail
  :age="age"
  @data="childData = $event"
  :name="title"
></app-user-detail>

UserDetail.vue ya gidip bunu orada kullanalım, props ile
props a age : String şeklinde koyduk, sadece age şeklinde de koyabilirdik, sonra yukarıya bir p ekledik
<p>kullanıcı yaşı : {{ age }}</p>
şeklinde componenti tamamaladık,
ve UserEdit.vue kullandığımız yerde 
<app-user-edit :age="age"></app-user-edit>
düzenlenmesini yaptık
şimdi UserEdit.vue ya gidelim, User.vue dan buraya props olarak gelecek, 

burada UserEdit.vue daki yaşı butona basarak değiştirdik, (aynı data daymış gibi ama bu parent a gitmedi, sadece UserEdit.vue da kaldı bu değişiklik)
bunu custom event ile yapıyorduk, changeEvent diye bir method yazacağız, tıklamayla bu method çalışacak methodun içnede export default {
    props : ["age"],
    methods: {
      changeAge(){
        this.age = 30;
        this.$emit("ageWasEdited", this.age)
      }
    },
  }
  bunu User.vue da yakalayacağız
<app-user-edit @ageWasEdited="age = $event" :age="age"></app-user-edit>

bu yol oldukça uzun bir yol; mantıklı değil, küçük veya biraz orta uygulamalarda kullanmak üzere başka bir yol var 
EVENT BUS
*/
