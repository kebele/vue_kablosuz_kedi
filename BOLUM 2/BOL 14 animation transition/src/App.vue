<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />
        <select class="form-control" v-model="activeEffect">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>
        <br />

        <button class="btn btn-primary" @click="show = !show">kutuyu göster/gizle</button>
        <br />
        <br />
        <transition name="fade">
          <div class="alert alert-success" v-if="show">bu bir alert kutusudur</div>
        </transition>
        <hr />
        <transition name="slide">
          <div class="alert alert-warning" v-if="show">bu bir alert kutusudur</div>
        </transition>
        <hr />
        <transition name="fade-slide" type="animation" appear>
          <div class="alert alert-danger" v-if="!show">danger</div>
        </transition>
        <hr />
        <transition
          enter-class
          enter-active-class="animate__animated animate__jello"
          leave-class
          leave-active-class="animate__animated animate__shake"
          appear
        >
          <div class="alert alert-primary" v-if="!show">primary</div>
        </transition>
        <hr />
        <transition :name="activeEffect">
          <div class="alert alert-success" v-if="show">select option lu kullanım</div>
        </transition>
        <hr />
        <!-- iki+ element arası transition -->
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">2+ element arası transition</div>
          <div class="alert alert-danger" v-if="!show" key="danger">2+ element arası transition</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="showJS = !showJS">JS kutuyu göster/gizle</button>
        <br />
        <br />
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancalled="afterLeaveCancelled"
        >
          <div style="width:200px; background-color: orange; height:100px" v-if="showJS">JS kutusu</div>
        </transition>
        <hr />
        <h3>dinamik componentler arasında geçiş</h3>
        <button class="btn btn-danger" @click="activeComponent = 'appHome'">home</button>
        <button class="btn btn-primary" @click="activeComponent = 'appPost'">post</button>
        <br />
        <br />
        <transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>        
        </transition>
        <hr>
        <!-- grup için transition -->
        <button class="btn btn-danger" @click="addNewItem">yeni eleman ekle</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li v-for="(number, index) in numberList" :key="index" class="list-group-item" @click="removeItem(index)">number : {{number}}</li>
          </transition-group>          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post";
import Home from "./components/Home";

export default {
  components: {
    appPost: Post,
    appHome: Home
  },
  data() {
    return {
      show: false,
      activeEffect: "fade",
      showJS: false,
      elementWidth: 100,
      activeComponent: "appPost",
      numberList : [1,2,3,4,5]
    };
  },
  methods: {    
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      // animasyonun ilk karesinden sonradan en son kareye kadarki geçen süre
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled");
    },
    addNewItem(){
      const position = Math.floor(Math.random() * this.numberList.length)
      this.numberList.splice(position, 0, this.numberList.length + 1)
    },
    removeItem(index){
      this.numberList.splice(index, 1)
    },
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

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

/* fade-slide için */

.fade-slide-enter {
  opacity: 0;
}

.fade-slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.fade-slide-leave {
}

.fade-slide-leave-active {
  animation: slide-out 1s ease-in forwards;
  transition: opacity 3s;
  opacity: 0;
}

@keyframes slide-in {
  /* transform yuk.aşa.sağ.sol gibi değişimler
    20px aşağıdan 0 a doğru y ekseninde hareket yapar */
  from {
    transform: translateY(20px);
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
    transform: translateY(20px);
  }
}
</style>
