<template>
   


<div class="page-wrapper">
			<div class="page-content">
				<!--breadcrumb-->
				<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
					<div class="breadcrumb-title pe-3">Tables</div>
					<div class="ps-3">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb mb-0 p-0">
								<li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">Basic Table</li>
							</ol>
						</nav>
					</div>
					<div class="ms-auto">
						<div class="btn-group">
							<button type="button" class="btn btn-primary">Settings</button>
							
							
						
						</div>
					</div>
				</div>
				<!--end breadcrumb-->
				<div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">Employees Table</h6>
						<hr/>
						<div class="card">
							<div class="card-body">
								<table class="table mb-0">
									<thead>
										<tr>
											<th scope="col">No</th>
											<th scope="col">First Name</th>
											<th scope="col">Last Name</th>
											
											<th scope="col">Handle</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="employe in employes.data" v-bind:key="employe.id">
											<th scope="row">{{employe.id  }}</th>
											<td>{{employe.first_name }}</td>
											<td>{{employe.last_name }}</td>
											

											<td>
												<router-link :to="'/edit/employe/' + employe.id" class="btn btn-success">Edit</router-link>
												<!-- <button type="button" class="btn btn-success" @click="edit(employe)"> Edit</button> -->
                                                <button type="button" class="btn btn-danger" @click="remove(employe)">Delete </button>
											
											</td>
										</tr>
										
									</tbody>
								</table>
							</div>
						</div>
				
				
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
    
</template>
    
    
    
    <script>
	import axios from 'axios';
    export default {
    name:'AllEmploye',




// start...

data(){
  return{


    employes: {},

    resetForm(){
   
      this.employe={
              id: '',
              first_name: '',
			  last_name: '',
            
            
               }

    },


    employe:{
              id: '',
			  first_name: '',
			  last_name: '',
            
            
               }
            }
   
    },


// get product.........

created() {
        this.EmployeLoad();
    },

    mounted() {
          console.log("mounted() called.......");
      },

    methods: {
		EmployeLoad()
            {
                 var page = "http://127.0.0.1:8000/api/employees";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.employes = data;
                      }
                 );
              },




// edit part start

edit(employe)
           {
			//console.log(customer.id);

            this.employe =  employe;
          
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/employees/'+this.employe.id;
              axios.put(editrecords, this.employe)
              .then(
                ({data})=>{
                  this.employe.first_name = '';
				  this.employe.last_name = '';
    
                  this.employe.id = ''
                  alert("employe Updated....!!!");
                  this.EmployeLoad();
                  console.log(data);
                  this.resetForm(); // call the resetForm 
                }
              );
 
           },









// delete customer start

remove(employe){

	console.log(employe.id);

 var url = `http://127.0.0.1:8000/api/employees/${employe.id}`;
  axios.delete(url);
  alert("employe Deleteddd");
  this.EmployeLoad();
   }

//end  delete part

			}


          }
    </script>