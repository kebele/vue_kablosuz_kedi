<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <!-- <li
        class="list-group-item"
        v-for="index in 5" :key="index.id">
        Sunucu #{{ index }}
      </li> 
      li yi buradan alıp yeni oluşturduğumuz Server.vue ya götürdük, ancak v-for u kaldıracağız v-for burada çalışacak
      -->
      <app-server @click.native="sendToDetail(server)" v-for="server in servers" :key="server.id" :serverData="server"></app-server>
      <!-- :serverData isimli bir props hazırladık, bunu Server.vue içinden alabilmek için -->
    </ul>
  </div>
</template>

<script>

import Server from './Server'; 
//burada kullanabilmek için import ettik ve kaydetmek için components e ekledik
import { eventBus } from '../../main'
//eventBus ı main.js den import ettik, ve bunu aşağıda methods da kullanalım

  export default {
    components : {
      appServer : Server
    },
    data(){
      return {
        servers : [
          {id: 1, status : "kritik"},
          {id: 2, status : "normal"},
          {id: 3, status : "tehlikede"},
          {id: 4, status : "bilinmiyor"},
        ]
      }
    },
  methods: {
    sendToDetail(server){
      // alert("tıklandı")
      eventBus.sendToServerData(server);
      //eventBus a git ve oradaki sendToServerData() yı çalıştır
    }
  },
  }
</script>