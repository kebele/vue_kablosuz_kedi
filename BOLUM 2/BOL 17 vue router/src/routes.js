import Home from './components/Home.vue'
import Header from './components/user/Header.vue'

//lazy load düzenlemesi 
const User = resolve => {
    require.ensure(["./components/user/User.vue"], ()=> {
        resolve(require("./components/user/User.vue"))
    }, "User")
}
//burada kod biraz garip duruyor ancak sıkıntı yok bunu webpack anlıyor bunu diğer lazy load olmasını istediğimiz comp lar içinde yapıp aşağıdaki normal importları yoruma alacağız, performans getirisi ve çağrıldığında yüklenmelerini ise consolde da network te görebiliriz

//ayrıca eğer mesela User a tıkladığımızıda user ile ilgili diğerleride yüklensin istiyorsak, o zaman bir parametre daha ekleriz ve "User" deriz son tarafa, aşağıda hepsine koyduk, bunun anlamı bunların hengisine tıklarsak tıklayalım, User a gidip oradan da hepsini yükleyecek networkte tabi bu durumda ilk olarak hepsini yükleyeceği için lazy load almamız olacak

//UserStart.vue için
const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], ()=> {
        resolve(require("./components/user/UserStart.vue"))
    }, "User")
}
//UserDetail.vue için 
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], ()=> {
        resolve(require("./components/user/UserDetail.vue"))
    }, "User")
}
//UserEdit.vue için
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], ()=> {
        resolve(require("./components/user/UserEdit.vue"))
    }, "User")
}


// import User from './components/user/User.vue'
// import UserStart from './components/user/UserStart.vue'
// import UserDetail from './components/user/UserDetail.vue'
// import UserEdit from './components/user/UserEdit.vue'

export const routes = [
    // { path : '', component : Home, name : 'anasayfa'},
    //aşağıdaki named router views için düzenlenmiş hali
    { path : '/', name : 'anasayfa', components : { default : Home, "header-top" : Header }},
    // { path : '/user/:id', component : User , name : 'kullanici'}
    // { path : '/user', component : User , name : 'kullanici', children : [
        //aşağısi named router views için düzenledim
    { path : '/user', name : 'kullanici', 
        components : {
            default : User,
            // "header-bottom" : Header
            "header-top" : Header
        },
        children : [
        {path : '', component : UserStart}, //user geldiğinde
        {path : ':id', component : UserDetail, beforeEnter : (to, from, next)=> {
            console.log("route seviyesinde giriş kontrolü")
            next();
            //route seviyesinde kontrol, eğer next() koymazsak route ilerlemez
        }}, //user/12 geldiğinde
        {path : ':id/edit', component : UserEdit, name : "userEdit"}, //user/12/edit geldiğinde
    ]},
    { path : "/redirect", redirect : "/user"},
    { path : "*", redirect : "/"}
]

