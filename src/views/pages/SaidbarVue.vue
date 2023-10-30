<template>

<div class="sidebar-wrapper" data-simplebar="true">
			<div class="sidebar-header">
				<div>
					<img src="frontend/images/logo-icon.png" class="logo-icon" alt="logo icon">
				</div>
				<div>
					<h4 class="logo-text">Rukada</h4>
				</div>
				<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
				</div>
			</div>
			<!--navigation-->
			<ul class="metismenu" id="menu">

				<li>
					
						<router-link to="/dashboard">
						<div class="parent-icon"><i class='bx bx-cookie'></i>
						</div>
						<div class="menu-title">Dashboard</div>
					    </router-link>
				</li>

				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-home-circle'></i>
						</div>
						<div class="menu-title">Customer</div>
					</a>
					<ul>
						<li><router-link to="/create/customer"><i class="bx bx-right-arrow-alt"></i>Create Customer</router-link>
						</li>
					  <li><router-link to="/all/customer"><i class="bx bx-right-arrow-alt"></i>All Customer</router-link>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class="bx bx-category"></i>
						</div>
						<div class="menu-title">Employee</div>
					</a>
					<ul>
						<li><router-link to="/create/employe"><i class="bx bx-right-arrow-alt"></i>Create Employee </router-link>
						</li>
						<li><router-link to="/all/employe"><i class="bx bx-right-arrow-alt"></i>All Employee</router-link>
						</li>
						
					</ul>
				</li>
				<li class="menu-label">UI Elements</li>
				
				<li>
					<a href="javascript:;" class="has-arrow">
						<div class="parent-icon"><i class='bx bx-cart'></i>
						</div>
						<div class="menu-title">Category</div>
					</a>
					<ul>
						<li><router-link to="/create/category"><i class="bx bx-right-arrow-alt"></i>Create category</router-link>
						</li>

						<li><router-link to="/all/category"><i class="bx bx-right-arrow-alt"></i>All category</router-link>
						</li>

					</ul>
				</li>
				<li>
					<a class="has-arrow" href="javascript:;">
						<div class="parent-icon"><i class='bx bx-bookmark-heart'></i> 
						</div>
						<div class="menu-title">Product</div>
					</a>
					<ul>
						<li><router-link to="/create/product"><i class="bx bx-right-arrow-alt"></i>create product</router-link>
						</li>
						<li><router-link to="/all/product"><i class="bx bx-right-arrow-alt"></i>all product</router-link>
						</li>
					</ul>
				</li>
				<li>
					<a class="has-arrow" href="javascript:;">
						<div class="parent-icon"><i class="bx bx-repeat"></i>
						</div>
						<div class="menu-title">Order</div>
					</a>
					<ul>
						<li><router-link to="/create/order"><i class="bx bx-right-arrow-alt"></i>Create Order</router-link>
						</li>
						<li><router-link to="/all/order"><i class="bx bx-right-arrow-alt"></i>All Order</router-link>
						</li>
					</ul>
				</li>
				<li>
					<a class="has-arrow" href="javascript:;">
						<div class="parent-icon"> <i class="bx bx-donate-blood"></i>
						</div>
						<div class="menu-title">Payment</div>
					</a>
					<ul>
						<li><router-link to="/create/payment"><i class="bx bx-right-arrow-alt"></i>Create Payment</router-link>
						</li>
						<li><router-link to="/all/payment"><i class="bx bx-right-arrow-alt"></i>All Payment</router-link>
						</li>
						
					</ul>
				</li>
				<li class="menu-label">Pages</li>
				<li>
					<a class="has-arrow" href="javascript:;">
						<div class="parent-icon"><i class="bx bx-lock"></i>
						</div>
						<div class="menu-title">Authentication</div>
					</a>
					<ul>
						
						<li> 

							<!-- //<router-link to="/login" target="_blank" ><i class="bx bx-right-arrow-alt"></i>Login</router-link> -->
						</li>
                 <li> <router-link to="authentication-lock-screen.html" target="_blank"><i class="bx bx-right-arrow-alt"></i>Registration</router-link>
						</li>
					</ul>
				</li>
				<li>
					<a href="user-profile.html">
						<div class="parent-icon"><i class="bx bx-user-circle"></i>
						</div>
						<div class="menu-title">User Profile</div>
					</a>
				</li>
				<li>
					<a href="timeline.html">
						<div class="parent-icon"> <i class="bx bx-video-recording"></i>
						</div>
						<div class="menu-title">Timeline</div>
					</a>
				</li>

				<li>
					<a href="https://themeforest.net/user/codervent" target="_blank">
						<div class="parent-icon"><i class="bx bx-support"></i>
						</div>
						<div class="menu-title">Support</div>
					</a>
				</li>
			</ul>
			<!--end navigation-->
		</div>
</template>