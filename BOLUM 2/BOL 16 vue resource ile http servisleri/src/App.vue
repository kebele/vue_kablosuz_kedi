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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      userName : null,
    }
  },
  methods: {
    saveUser(){
      // alert(this.userName)
      // this.$http.post(url, data)
      // this.$http.post("https://vue-resource-be59c.firebaseio.com/users/jack/name.json", data)
      //bu url ye bu veriyi post'la
      this.$http.post("https://vue-resource-be59c.firebaseio.com/users.json", { userName : this.userName})
        .then((response)=>{
          console.log(response)
        })
    },
    getUsers(){
      // alert("123")
      this.$http.get("https://vue-resource-be59c.firebaseio.com/users.json")
        .then((response)=>{
          // console.log(response);
          console.log(response.body);
        })
    }
  },
}
</script>

<style>
</style>
