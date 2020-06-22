<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
        <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
        <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Kırmızı Temayı Yükle</button>
        <hr />
        <component :is="selectedComponent">
            <h3>{{ selectedComponent }}</h3>
        </component>
        <hr>
        <!-- <app-blue>
          <h3>mavi</h3>
          <p>ronaldo</p>
        </app-blue>
        <app-green>
          <h3>yeşil</h3>
          <p>bale</p>
        </app-green>
        <app-red>
          <h3>kırmızı</h3>
          <p>benzema</p>
        </app-red> -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data(){
      return {
          selectedComponent : "appBlue"
      }
  }
};
</script>

<style></style>
