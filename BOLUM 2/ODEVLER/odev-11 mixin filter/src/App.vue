<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <p>{{text | tersi}}</p>

        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p> {{ text | charUzun }}</p>

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->
  <p>{{tersi}}</p>
  <p>{{charUzun}}</p>

        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
        
      </div>
    </div>
  </div>
</template>
<script>
import { mixinsIcin} from './mixinsIcin';

  export default {
    mixins : [mixinsIcin],
    data(){
      return {
        text : "sergio ramos"
      }
    },
    filters : {
      tersi(value){        
        return value.split('').reverse().join('')        
      }
    },
    //mixin için
    // computed : {
    //   tersi(){
    //     return this.text.split('').reverse().join('') 
    //   },
    //   charUzun(){
    //     return `${this.text} (${this.text.length})`;
    //   }
    // }
  }
</script>
<style>

</style>
