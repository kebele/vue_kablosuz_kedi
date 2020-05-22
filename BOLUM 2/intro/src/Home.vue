<template>
    <div>
        <lamp-status v-for="lamp in 5" :key="lamp.index"></lamp-status>
    </div>
</template>

<script>
import LampStatus from './LampStatus';
export default {
    components : {
        "lamp-status" : LampStatus
    }
}
</script>

<style>
    /* 
    şimdi lamPStatus u Home içinde göstermek istiyoruz
    script e import edeceğiz
    daha sonra export defaultta compoents içine bu comp da kullanacağımız componentleri koyacağız, nesne yapıyorz ki bir den fazla compoenent kullanabiliriz, hangisi istersek buraya ekleriz import sonrası, isim ve değer şeklinde
     */
</style>