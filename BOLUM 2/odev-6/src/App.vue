<template>
  <div class="container">
    <Header/>
    <hr>
    <Sunucu/>
    <hr>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import Sunucu from './Sunucu';
export default {
  components : {
    Header,
    Sunucu,
    Footer
  }
}
</script>

<style>

</style>
