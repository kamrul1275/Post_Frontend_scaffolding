<template>

<div>
  
  
  <!-- <MastarView></MastarView> -->
<router-view></router-view>

</div>



<!-- <LoginVue></LoginVue>
 <MastarView></MastarView> -->



</template>

<script>
// @ is an alias to /src
//import MastarView from './views/MastarView.vue'
import LoginVue from './views/pages/auth/LoginVue.vue'


export default {

  components: {
    //MastarView,
    LoginVue,
    

    // LoginVue
  }
}
</script>