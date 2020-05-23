<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">adımı değiştir</button>
    <hr />
    <div class="row">
      <!-- <app-user-detail name="rafael varane"></app-user-detail> -->
      <app-user-detail :name="title"></app-user-detail>
      <app-user-edit></app-user-edit>
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
burada butona basarsak title değeri değişecek sergio olacak bu durumda kullanıcı adı da sergio şeklinde değişmiş olacak

burada yaptığımız şey
PARENT to CHILD buna dikkat
*/
