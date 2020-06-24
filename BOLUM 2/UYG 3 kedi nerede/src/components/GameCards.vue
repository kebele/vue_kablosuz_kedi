<template>
    <div>
        <!-- <h3>Game Cards</h3> -->
        <div class="game-area">
            <h1 class="title">kedi <span>nerede!</span></h1>
            <h4 class="description">açık kartlardan birini seçtikten sonra aşağıdaki karta bak!</h4>
            <div class="container">
                <app-card v-for="card in 5" :key="card.id"></app-card>
            </div>
            <div class="container">
                <app-default-card></app-default-card>
            </div>

        </div>
    </div>
</template>
<script>
import Card from "./Card"
import DefaultCard from "./DefaultCard"

export default {
    components : {
        appCard : Card,
        appDefaultCard : DefaultCard,
    }    
}
</script>
<style>
    .title{
        text-align: center;
        color: orangered;
    }

    .title span{
        color: crimson;
    }

    .description{
        color : gray;
        text-align: center;
    }

    .container{
        /* container içinde birden fazla card olacak bunları yanyana getirmek istiyoruz, ya card lara float vereceğiz yada container da  display:flex diyeceğiz*/
        display: flex;
        justify-content: center;
        align-items: center;
        /* dikey ve yatay ortaladık */
        margin-top: 50px;
    }
    
</style>