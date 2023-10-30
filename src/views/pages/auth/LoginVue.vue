
<template>
 <div>
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<img src="/frontend/images/logo-img.png" width="180" alt="" />
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									
								
								
									<div class="form-body">




										<form @submit.prevent="LoginData">
     
   
										<div class="form-group" >
										<label>Email</label>
										<input type="email" v-model="user.email" class="form-control"  placeholder="Email">
										</div>


										<div class="form-group">
										<label>Password</label>
										<input type="password" v-model="user.password" class="form-control"  placeholder="Password">
									</div>

										<button type="submit" class="btn btn-primary">Login</button>



                                    </form>



									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			 </div>
		</div>
	</div> 
	 



</template>




<script>
       
       import axios from 'axios';
   

     export default {
       name: 'LoginVue',
       data () {
         return {
           result: {},
           user:{
                      email: '',
                      password: '',
           }
         }
       },
       created() { 
       },
       mounted() {
             console.log("mounted() called.......");
         },

		 methods: {
              LoginData()
              {
               axios.post("http://127.0.0.1:8000/api/login", this.user)
               .then(
                 ({data})=>{
                  console.log(data);
                  try {
                  if (data.status === true) {
                        alert("Login Successfully"); 
                        this.$router.push({ name: 'HomeVue' })
                        } else {
                        alert("Login failed")
                        }

                        } catch (err) {
                        alert("Error, please try again");
                        }    
                 }
               )
              }
         }
     }
	</script>