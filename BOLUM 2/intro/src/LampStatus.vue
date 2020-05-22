<template>
    <div>
        <p>lamba durumu : {{ status }}</p>
        <button @click="openLamb">lambayı aç</button>
        <hr>
    </div>
</template>

<script>
//burası instance
export default {
    data(){
        return {
            status : "kapalı"
        }
    },
    methods: {
        openLamb(){
            this.status = "açık"
        }
    },
}
</script>

<style>
    
</style>