<template>
    <div>
        <!-- <h3>Game Cards</h3> -->
        <!-- <p>{{selectedCard}}</p> -->
        <div class="game-area">
            <h1 class="title">kedi <span>nerede!</span></h1>
            <h4 class="description">açık kartlardan birini seçtikten sonra aşağıdaki karta bak!</h4>
            <div class="container">
                <transition-group name="rotate-all" class="card-container" appear>
                    <app-card 
                    :class="{'shadow' : selectedCard == card.id}"
                    @click.native="selectedCard = card.id"
                    v-for="card in cards" 
                    :key="card.id" 
                    :card="card"
                    >
                    </app-card>
                </transition-group>                
            </div>
            <div class="container">
                <transition name="rotate" mode="out-in">
                    <component 
                        :is="activeCard"
                        @click.native="showCard(answer)"
                        :card="answer">
                    </component>                
                </transition>
                <!-- <app-default-card></app-default-card> -->
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
    },
    data(){
        return {
            cards : [
                {id : 1, component : "app-card", image : "/src/assets/card-1.jpg"},
                {id : 2, component : "app-card", image : "/src/assets/card-2.jpg"},
                {id : 3, component : "app-card", image : "/src/assets/card-3.jpg"},
                {id : 4, component : "app-card", image : "/src/assets/card-4.jpg"},
                {id : 5, component : "app-card", image : "/src/assets/card-5.jpg"}
            ], 
            selectedCard : null,
            answer : {},
            activeCard : "app-default-card"
        }
    },
    created(){
        let answer = Math.ceil(Math.random() * this.cards.length);
        //  console.log(answer)
        this.answer = this.cards[answer-1];
        console.log(this.answer)
    },
    methods: {
        showCard(answer){
            this.activeCard = answer.component;
        }
    },
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

    .container, .card-container{
        /* container içinde birden fazla card olacak bunları yanyana getirmek istiyoruz, ya card lara float vereceğiz yada container da  display:flex diyeceğiz*/
        display: flex;
        justify-content: center;
        align-items: center;
        /* dikey ve yatay ortaladık */
        margin-top: 50px;
    }  

    .shadow{
        box-shadow: 0px 5px 48px crimson !important;
        transition : box-shadow 0.5s
    }

    /* açik kartların animayonları */
    .rotate-all-enter{} 
    .rotate-all-enter-active{
        animation : rotate-all ease-in-out 2s forwards
        /* ease-in-out yavaş başla hızla yavaş bit */
    }
    .rotate-all-leave{}
    .rotate-all-leave-active{}

    @keyframes rotate-all {
        from{
            transform : rotateY(0);
        }
        to{
            transform: rotateY(2160deg);
        }
    }
    /* kapalı alttaki kartın animasyonu */
    .rotate-enter{}
    .rotate-enter-active{
        animation: rotate-in 1s ease-in-out forwards
    }
    .rotate-leave{}
    .rotate-leave-active{
        animation : rotate-out 1s ease-in-out forwards
    }

    @keyframes rotate-in {
        from{
            transform: rotateY(90deg)
        }
        to{
            transform : rotateY(0deg)
        }
    }
    @keyframes rotate-out {
        from{
            transform: rotateY(0deg)
        }
        to{
            transform : rotateY(90deg)
        }
    }

</style>