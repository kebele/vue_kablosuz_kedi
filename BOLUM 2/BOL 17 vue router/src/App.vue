<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <br>
            <!-- <app-header></app-header> named r
            outer view için yoruma aldım ve aşağıdaki router-view ları 3 tane yaptim -->
            <hr>
            <!-- <router-view></router-view> named router view için yoruma aldım eski düzen için bu kalsın -->
            <router-view name="header-top"></router-view>
            <transition name="slide" mode="out-in">
                <router-view></router-view>            
            </transition>
            <router-view name="header-bottom"></router-view>
        </div>
    </div>
</div>
</template>

<script>
import Header from './components/user/Header'
export default {
    components : {
        appHeader : Header,
    }
}
</script>

<style>
    
.slide-enter {
  opacity : 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-in forwards;
  transition : opacity 1s;
  opacity : 0;
  position: absolute;
}

.slide-move{
  transition : transform 1s;
}

@keyframes slide-in {
  /* transform yuk.aşa.sağ.sol gibi değişimler
    20px aşağıdan 0 a doğru y ekseninde hareket yapar */
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  /* transform yuk.aşa.sağ.sol gibi değişimler
    20px aşağıdan 0 a doğru y ekseninde hareket yapar */
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(30px);
  }
}
</style>
