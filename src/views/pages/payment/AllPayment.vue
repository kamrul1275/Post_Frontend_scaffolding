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
							<button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
							</button>
							<div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
								<a class="dropdown-item" href="javascript:;">Another action</a>
								<a class="dropdown-item" href="javascript:;">Something else here</a>
								<div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
							</div>
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
											<th scope="col">Product Name</th>
											<th scope="col">Product Description</th>
											<th scope="col">Category_id</th>
											<th scope="col">Paymment Date</th>
											<th scope="col">Price</th>
											<th scope="col">Quantity </th>
										
										</tr>
									</thead>
									<tbody>
										<tr v-for="payment in payments.data" v-bind:key="payment.id">
											<th scope="row">{{payment.id  }}</th>
											<td>{{payment.order_id }}</td>
											<td>{{payment.paymatent_date }}</td>
											<td>{{payment.amount }}</td>
											<td>{{payment.paymentmethod }}</td>
											<td>
												<!-- //<button type="button" class="btn btn-success" @click="edit(payment)"> Edit</button> -->
												<router-link :to="'/edit/payment/' + payment.id" class="btn btn-success">Edit</router-link>
                                                <button type="button" class="btn btn-danger" @click="remove(payment)">Delete </button>
											
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
    name:'AllPayment',




// start...

data(){
  return{


    payments: {},

    resetForm(){
   
      this.payment={
                 id: '',
                  order_id: '',
                  paymatent_date: '',
                  amount: '',
                  paymentmethod: '',
                
             
            
               }

    },


          payment:{
            id: '',
                  order_id: '',
                  paymatent_date: '',
                  amount: '',
                  paymentmethod: '',
                
            
               }
            }
   
    },


// get product.........

created() {
        this.PaymentLoad();
    },

    mounted() {
          console.log("mounted() called.......");
      },

    methods: {
		PaymentLoad()
            {
                 var page = "http://127.0.0.1:8000/api/payments";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.payments = data;
                      }
                 );
              },




// edit part start

edit(payment)
           {
			//console.log(customer.id);

            this.payment =  order;
          
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/orders/'+this.payment.id;
              axios.put(editrecords, this.product)
              .then(
                ({data})=>{
                  this.payment.first_name = '';
				  this.payment.last_name = '';
                  this.payment.money = '',
                  this.id = ''
                  alert("payment Updated....!!!");
                  this.PaymentLoad();
                  console.log(data);
                  this.resetForm(); // call the resetForm 
                }
              );
 
           },









// delete customer start

remove(payment){

 var url = `http://127.0.0.1:8000/api/payments/${payment.id}`;
  axios.delete(url);
  alert("payment Deleted...");
  this.PaymentLoad();
   }

//end  delete part

			}


          }
    </script>
    
        
 