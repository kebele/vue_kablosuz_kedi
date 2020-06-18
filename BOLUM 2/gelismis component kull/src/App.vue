<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <app-memory content="bu bir anıdır"></app-memory> -->
        <br />
        <br />

        <button
          @click="selectedComponent = 'appMemory'"
          class="btn-sm btn btn-primary"
        >
          appMemory
        </button>
        <button
          @click="selectedComponent = 'appNewMemory'"
          class="btn-sm btn btn-primary"
        >
          appNewMemory
        </button>
        <button
          @click="selectedComponent = 'appAuthor'"
          class="btn-sm btn btn-primary"
        >
          appAuthor
        </button>
        <hr />
        <p>
          seçili component : <strong>{{ selectedComponent }}</strong>
        </p>
        <hr />

        <!-- <component :is="selectedComponent">
          <h1 slot="heading">güzel bir gün</h1>
          <p slot="content">bu süper bir anıydı</p>
        </component> -->

<!-- dinamik componenti keep alive yapmak için -->
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="heading">güzel bir gün</h1>
            <p slot="content">bu süper bir anıydı</p>
          </component>
        </keep-alive>

        <!-- <app-memory>
          <h1 slot="heading">güzel bir gün</h1>
          <p slot="content">bu süper bir anıydı</p>
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import NewMemory from "./components/NewMemory";
import Author from "./components/Author";

export default {
  data() {
    return {
      selectedComponent: "appMemory",
    };
  },
  components: {
    appMemory: Memory,
    appNewMemory: NewMemory,
    appAuthor: Author,
  },
};
</script>
