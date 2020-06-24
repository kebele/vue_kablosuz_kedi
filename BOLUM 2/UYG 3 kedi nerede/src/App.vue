<template>
<transition-group name="slideContainer" mode="out-in">
    <component
        @activeComponentEvent = "activeComponent = $event"
        :is="activeComponent"
        key="mainComponent"
    ></component>
    <canvas id="canvas" key="canvas" v-show="activeComponent == 'app-celebrate'"></canvas>
</transition-group>

</template>
<script>

import GameCards from "./components/GameCards"
import Failure from "./components/Failure"
import Celebrate from "./components/Celebrate"

export default {
    components : {
        appGameCards : GameCards,
        appCelebrate : Celebrate,
        appFailure : Failure, 
    },
    data(){
        return {
            activeComponent : "app-game-cards",
        }
    },
}
</script>
<style>
    body{
        font-family: 'Courier New', Courier, monospace
    }

    .slideContainer-enter{}
    .slideContainer-enter-active{
        animation : slide-in .3s ease-out forwards
    }
    .slideContainer-leave{}
    .slideContainer-leave-active{
        animation : slide-out ease-out forwards
    }

    @keyframes slide-in{
        /* slide-in yatay eksende (x ekseni) -1000px den başlayacak, 0 px noktasına yani normalde sayfada bulunması gereken konuma gelecek */
        from{
            transform: translateX(-1000px);
            opacity :0
        }
        to{
            transform : translateX(0px);
            opacity :1
        }
    }
    @keyframes slide-out{
        /* slide-in yatay eksende (x ekseni) -1000px den başlayacak, 0 px noktasına yani normalde sayfada bulunması gereken konuma gelecek */
        from{
            transform: translateX(0px);
            opacity :1
        }
        to{
            transform : translateX(1000px);
            opacity :0
        }
    }
</style>
