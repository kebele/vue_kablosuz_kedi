<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input 
            type="text" 
            class="form-control"
            v-model="userName">
        </div>
          <button 
            class="btn btn-primary"
            @click="saveUser">kaydet</button>
          <button 
            class="btn btn-success"
            @click="getUsers">verileri getir</button>
            <hr>
            <ul class="list-group">
              <!-- <li class="list-group-item">deneme</li> -->
              <li 
                class="list-group-item"
                v-for="user in userList" 
                :key="user.id">
                <span>{{ user.data.userName }}</span>
                  <button 
                    class="btn btn-xs btn-danger"
                    @click="deleteUser(user.key)"
                  >sil
                  </button>
                </li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName : null,
      userList : [],
    }
  },
  methods: {
    saveUser(){
      // alert(this.userName)
      // this.$http.post(url, data)
      // this.$http.post("https://vue-resource-be59c.firebaseio.com/users/jack/name.json", data)
      //bu url ye bu veriyi post'la
      // this.$http.post("https://vue-resource-be59c.firebaseio.com/users.json", { userName : this.userName})

      //root kullanımı, main e bak
      // this.$http.post("users.json", {userName : this.userName})
      //   .then((response)=>{
      //     console.log(response)
      //   })
      //yukarıyı post a alternatif için yoruma aldım
      // this.$resource("users.json").save({}, { userName : this.userName});
      this.resource.kaydet({}, { userName : this.userName })
    },
    getUsers(){

      this.$resource("users.json").get()

      // alert("123")
      // this.$http.get("https://vue-resource-be59c.firebaseio.com/users.json")
      // this.$http.get("users.json")
      //bunu vue.resource u kullanabilmek için yoruma aldım
        .then((response)=>{
          // console.log(response);
          // console.log(response.body);
          //aşağıyı main.js de next() değişikliği yaptığımız için yoruma aldım, 
        //   let data = response.data;
        //   for(let key in data){
        //     // console.log(data[key])
        //     this.userList.push(data[key]);
        //   }
        // })
        return response.json()
    }).then(data => {
      console.log(data);
      for(let key in data.userList){
        // this.userList.push(data.userList[key])
        //delete için firebase deki keyleride tutmamız lazım
        this.userList.push(
          {
            key : key,
            data : data.userList[key],
          }
        )
      }
    })
  },
  deleteUser(userKey){
    // alert("delete")
    //vue resource da delete methodnu kullanmak için aşağıyı yoruma aldım
    // this.$http.delete("users/" + userKey + ".json")
    //   .then((response)=>{
    //     console.log(response);
    //   })
    this.$resource.delete("users/" + userKey + ".json")
  }
},
created(){
  const customActions = {
    kaydet : {method : "POST", url : "users.json"}
  };
  this.resource = this.$resource("", {}, customActions);
}
}
</script>

<style>
</style>
