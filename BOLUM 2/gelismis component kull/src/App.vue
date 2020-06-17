<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <app-memory content="bu bir anıdır"></app-memory> -->
        <app-memory>
          <h1 slot="heading">güzel bir gün</h1>
          <p slot="content">bu süper bir anıydı</p>
        </app-memory>
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory";
  import NewMemory from "./components/NewMemory";
  import Author from "./components/Author";

  export default {
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,
      appAuthor : Author,
    }
  }
</script>
