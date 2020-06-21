<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html directive </strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color="'#decdec'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur beatae culpa doloribus, ex
          facilis fugiat, fugit magni molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas ratione sequi
          unde ut!
        </p>
        <hr />
        <p
          v-color="'orange'"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perferendis!</p>
        <hr />
        <p
          v-color:background="'red'"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus aliquid perferendis neque in omnis cum, maxime eos iusto explicabo.</p>
        <hr />
        <p
          v-color:background.delay="'green'"
        >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque animi, itaque, voluptatum ea quas, tenetur illo ipsum cum officiis atque laudantium. Doloribus deserunt excepturi iusto!</p>
        <hr />
        <p
          v-renk:background.delay.flash="'purple'"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore at aliquid laudantium ea magni esse reiciendis aspernatur quisquam nobis rem voluptatem sit perferendis, velit unde!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    renk: {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delay"]) {
          //eğer delay varsa
          delay = 2000;
        }

        if(binding.modifiers["flash"]){
          let firstColor = binding.value;
          let secondColor = "#fbbd08";
          let currentColor = firstColor;
         
       
          setTimeout(() => {
            setInterval(()=>{
            currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor; 
            if (binding.arg == "background") {
            el.style.backgroundColor = currentColor;
          } else {
            el.style.color = currentColor;
          }
          }, 1000)
        }, delay)
      } else {
        setTimeout(() => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  }
  }}
</script>

<style>
</style>
