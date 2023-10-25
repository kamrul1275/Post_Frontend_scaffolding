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
								<li class="breadcrumb-item active" aria-current="page">Customer Table</li>
							</ol>
						</nav>
					</div>
					<div class="ms-auto">
						<div class="btn-group">
							
							<router-link to="/create/customer" class="btn btn-primary"> Create Customer</router-link>

						
							
							
						</div>
					</div>
				</div>
				<!--end breadcrumb-->
				<div class="row">
					<div class="col-xl-9 mx-auto">
						<h6 class="mb-0 text-uppercase">Basic Table</h6>
						<hr/>
						<div class="card">
							<div class="card-body">
							
								<table class="table mb-0">
									<thead>
										<tr>
											<th scope="col">No</th>
											<th scope="col">First Name</th>
											<th scope="col">Last Name</th>
											<th scope="col">Money</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
                                   
								   

										 <tr v-for="customer in customers.data" v-bind:key="customer.id">
											<th scope="row">{{customer.id  }}</th>
											<td>{{customer.first_name }}</td>
											<td>{{customer.last_name }}</td>
											<td>{{customer.money }}</td>

											<td>
												<router-link to="/all/customer" class="btn btn-success" @click="edit(customer)">Edit</router-link>
											
												<!-- //<button type="button" class="btn btn-success" @click="edit(customer)"> Edit</button> -->

                                                <button type="button" class="btn btn-danger" @click="remove(customer)">Delete </button>
											
											
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
    name:'AllCustomer',




// start...

data(){
  return{


    customers: {},

    resetForm(){
   
      this.customer={
              id: '',
              first_name: '',
			  last_name: '',
              money: '',
            
               }

    },


    customer:{
              id: '',
			  first_name: '',
			  last_name: '',
              money: '',
            
               }
            }
   
    },


// get product.........

created() {
        this.CustomerLoad();
    },

    mounted() {
          console.log("mounted() called.......");
      },

    methods: {
		CustomerLoad()
            {
                 var page = "http://127.0.0.1:8000/api/customers";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.customers = data;
                      }
                 );
              },




// edit part start

edit(customer)
           {
			//console.log(customer.id);

            this.customer =  customer;
          
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/customers/'+this.customer.id;
              axios.put(editrecords, this.customer)
              .then(
                ({data})=>{
                  this.customer.first_name = '';
				  this.customer.last_name = '';
                  this.customer.money = '',
                  this.id = ''
                  alert("Customer Updated....!!!");
                  this.CustomerLoad();
                  console.log(data);
                  this.resetForm(); // call the resetForm 
                }
              );
 
           },









// delete customer start

remove(customer){

 var url = `http://127.0.0.1:8000/api/customers/${customer.id}`;
  axios.delete(url);
  alert("Customer Deleteddd");
  this.CustomerLoad();
   }

//end  delete part

			}


          }
    </script>