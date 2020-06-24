<template>
    <div class="container">
        <h1>tebrikler bildiniz !!!</h1>
        <button @click="newGame">yeni oyun</button>
    </div>
</template>
<script>
export default {
    methods: {
        newGame(){
            this.$emit("activeComponentEvent", "app-game-cards")
        }
    },
}
</script>
<style scoped>
    .container{
        position: absolute;
        top : 0;
        left : 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: crimson */
        /* confetilerin görünmesi için arka plan rengini değiştirdim,  */
    }

    .container h1{
        text-align: center;
        font-size: 3em;
        color: darkgreen;
        opacity: 0.5;
    }

    .container button{
        cursor: pointer;
        width: 200px;
        height: 50px;
        background-color: #fff;
        color: blue;
        border : 1px solid black;
        font-size: 30px;
        border-radius: 5px;
        outline: none;
        transition : all .5s
    }

    .container button:hover{
        background-color: limegreen;
        color: black;
        transition : all .5s
    }
</style>















