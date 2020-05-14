new Vue({
    el : "#exercise",
    data : {
        name : "cristiano",
        age : "42",
        imgLink : "<img src='https://i.pinimg.com/236x/4e/7b/f0/4e7bf080822eae87b98636a7e0735c1e--penguin-art-linux.jpg'>"
    },
    methods : {
        randomSayi : function(){
            return (Math.random());
            // return (Math.floor(Math.random()*10))
        },
        changeInput : function(e){
            this.name = e.target.value
        }
    }
})