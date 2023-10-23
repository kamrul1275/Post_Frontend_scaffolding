<template>
 	<!--wrapper-->
     <div class="wrapper">
		<!--sidebar wrapper -->


		<SaidbarVue></SaidbarVue>

		<!--end sidebar wrapper -->
		<!--start header -->
		

        <HeaderVue></HeaderVue>

		<!--end header -->
		<!--start page wrapper -->

<router-view></router-view>
		
		<!--end page wrapper -->
		<!--start overlay-->
		<div class="overlay toggle-icon"></div>
		<!--end overlay-->
		<!--Start Back To Top Button--> <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
		<!--End Back To Top Button-->
		<footer class="page-footer">
			<p class="mb-0">Copyright © 2021. All right reserved.</p>
		</footer>
	</div>
	<!--end wrapper-->
	<!--start switcher-->
	<SwitcherWrapper></SwitcherWrapper>
	<!--end switcher-->
</template>

<script>
import SaidbarVue from './pages/SaidbarVue.vue' ;
import HeaderVue from './pages/HeaderVue.vue' ;

export default {
  name: 'MastarView',
  components: {
    SaidbarVue,HeaderVue
  } 
}
</script>
