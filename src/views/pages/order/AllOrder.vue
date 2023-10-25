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
											<th scope="col">customer_id</th>
											<th scope="col">employer_id</th>
											<th scope="col">product_id</th>
											<th scope="col">total_order</th>
											<th scope="col">order_date</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="order in orders.data" v-bind:key="order.id">
											<th scope="row">{{order.id  }}</th>
											<td>{{order.customer_id }}</td>
											<td>{{order.employer_id }}</td>
											<td>{{order.product_id }}</td>
											<td>{{order.total_order }}</td>
											<td>{{order.order_date }}</td>
											<td>
												<button type="button" class="btn btn-success" @click="edit(order)"> Edit</button>
                                                <button type="button" class="btn btn-danger" @click="remove(order)">Delete </button>
											
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
    name:'AllOrder',




// start...

data(){
  return{


    orders: {},

    resetForm(){
   
      this.order={
		          id: '',
                  customer_id: '',
                  employer_id: '',
                  product_id: '',
                  total_order: '',
                  order_date: '',
             
            
               }

    },


          order:{
			      id: '',
                  customer_id: '',
                  employer_id: '',
                  product_id: '',
                  total_order: '',
                  order_date: '',
            
               }
            }
   
    },


// get product.........

created() {
        this.OrderLoad();
    },

    mounted() {
          console.log("mounted() called.......");
      },

    methods: {
		OrderLoad()
            {
                 var page = "http://127.0.0.1:8000/api/orders";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.orders = data;
                      }
                 );
              },




// edit part start

edit(order)
           {
			//console.log(customer.id);

            this.order =  order;
          
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/orders/'+this.order.id;
              axios.put(editrecords, this.product)
              .then(
                ({data})=>{
                  this.order.first_name = '';
				  this.order.last_name = '';
                  this.order.money = '',
                  this.id = ''
                  alert("oorder Updated....!!!");
                  this.OrderLoad();
                  console.log(data);
                  this.resetForm(); // call the resetForm 
                }
              );
 
           },









// delete customer start

remove(order){

 var url = `http://127.0.0.1:8000/api/orders/${order.id}`;
  axios.delete(url);
  alert("order Deleted...");
  this.OrderLoad();
   }

//end  delete part

			}


          }
    </script>