<template>
    <div class="container">
        <form v-if="!isOn">
            <div class="row" >
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Soru 1 -->
                    <!-- Aşağıdaki bilgileri içeren bir Üye Ol sayfası geliştiriniz. -->
                    <!-- Tam Adı (Ad + Soyad) -->
                    <!-- E-mail -->
                    <!-- Şifre -->
                    <!-- Cinsiyet (Kadın/Erkek) -->

                    <!-- FullName.vue ya taşıdım -->
                    <!-- <div class="form-group">
                        <label for="">adı</label>
                        <input type="text" class="form-control" v-model="userData.name">
                    </div>
                    <div class="form-group">
                        <label for="">soyadı</label>
                        <input type="text" class="form-control" v-model="userData.surname">
                    </div> -->
                    
                    <app-fullname v-model="fullname"></app-fullname>

                    <div class="form-group">
                        <label for="">e-mail</label>
                        <input type="email" class="form-control" v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="">sifre</label>
                        <input type="password" class="form-control" v-model="userData.password">
                    </div>
                    <div class="form-group">                        
                        <label for="">
                            <input type="radio" v-model="userData.gender" value="kadın"> kadın
                        </label>
                        <label for="">
                            <input type="radio" v-model="userData.gender" value="erkek"> erkek
                        </label>
                    </div>
                    <button @click.prevent="gonder" class="btn btn-primary">gönder</button>


                    <!-- Soru 2 -->
                    <!-- Üye Ol formu, Submit EDİLMEDİĞİ SÜRECE ekranda gözükmelidir.-->
                    <!-- Üye Bilgileri Ekranı ise form Submit EDİLDİKTEN SONRA ekranda gözükecektir -->

                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->

                </div>
            </div>
        </form>
        <hr>
        <div v-if="isOn" class="row" >
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <!-- <p>Tam Ad: {{userData.name}} {{userData.surname}}</p> -->
                        <p>Tam Ad: {{userData.fullname}}</p>
                        <p>E-mail: {{userData.email}}</p>
                        <p>Şifre: {{userData.password}}</p>
                        <p>Cinsiyet: {{userData.gender}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from './Fullname'

    export default {
        components : {
            appFullname : Fullname
        },
        data(){
            return {
                userData : {
                    name : '',
                    surname : '',
                    email : '',
                    password : '',
                    gender : '',                    
                },
                isOn : false,
                fullname : 'sergio ramos'
            }
        },
        methods: {
            gonder(){
                this.isOn = true;
            }
        },
    }
</script>

<style>
</style>
