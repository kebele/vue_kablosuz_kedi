<template>
  <div>
    <div class="form-group">
      <label for>adı</label>
      <input type="text" class="form-control" :value="name" @input="nameChanged(true, $event)"/>
    </div>
    <div class="form-group">
      <label for>soyadı</label>
      <input type="text" class="form-control" :value="surname" @input="nameChanged(false, $event)"/>
    </div>
  </div>
</template>
<script>
export default {
    props : ["value"],
    computed : {
        name(){
            return this.value.split(' ')[0];
        },
        surname(){
            return this.value.split(' ')[1]
        }
    },
    methods: {
        nameChanged(isFirst, event){
            let fullName = '';
            if(isFirst){
                fullName = event.target.value + ' ' + this.surname
            } else {
                fullName = this.name + ' ' + event.target.value
            }
            this.value = fullName;
            this.$emit("input", this.value)
        }
    }
};
</script>

<style>
</style>