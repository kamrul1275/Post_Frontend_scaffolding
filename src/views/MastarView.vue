<template>
	<div class="wrapper">

		

	  <SaidbarVue></SaidbarVue>
	  <HeaderVue></HeaderVue>
	  <router-view></router-view> <!-- Add this line to display routed components -->
	  <div class="overlay toggle-icon"></div>
	  
	  <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
	  <footer class="page-footer">
		<p class="mb-0">Copyright © 2021. All right reserved.</p>
	  </footer>
	</div>
	<SwitcherWrapper></SwitcherWrapper>
  </template>
  

<script>
import SaidbarVue from './pages/SaidbarVue.vue' ;
import HeaderVue from './pages/HeaderVue.vue' ;

export default {
  name: 'MastarView',
  components: {
    SaidbarVue,HeaderVue,
  } 
}
</script>

<style scoped>
</style>