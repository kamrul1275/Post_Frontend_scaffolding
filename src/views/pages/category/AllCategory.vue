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
						<h6 class="mb-0 text-uppercase">Basic Table</h6>
						<hr/>
						<div class="card">
							<div class="card-body">
								<table class="table mb-0">
									<thead>
										<tr>
											<th scope="col">No</th>
											<th scope="col">Category Name</th>
											<th scope="col">Details</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										
										<tr v-for="category in categorys.data" v-bind:key="category.id">
											<th scope="row">{{category.id  }}</th>
											<td>{{category.category_name }}</td>
											<td>{{category.details }}</td>
											<td>
												<!-- <button type="button" class="btn btn-success" @click="edit(category)"> Edit</button> -->

												<router-link :to="'/edit/category/' + category.id" class="btn btn-success">Edit</router-link>
                                                <button type="button" class="btn btn-danger" @click="remove(category)">Delete </button>
											
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
    name:'AllCategory',




// start...

data(){
  return{


    categorys: {},

    resetForm(){
   
      this.category={
              id: '',
              category_name: '',
			  details: '',
             
            
               }

    },


    category:{
		id: '',
              category_name: '',
			  details: '',
             
            
            
               }
            }
   
    },


// get product.........

created() {
        this.CategoryLoad();
    },

    mounted() {
          console.log("mounted() called.......");
      },

    methods: {
		CategoryLoad()
            {
                 var page = "http://127.0.0.1:8000/api/categorys";
                 axios.get(page)
                  .then(
                      ({data})=>{
                        console.log(data);
                        this.categorys = data;
                      }
                 );
              },




// edit part start

edit(category)
           {
			//console.log(customer.id);

            this.category =  category;
          
           },
           updateData()
           {
              var editrecords = 'http://127.0.0.1:8000/api/categorys/'+this.category.id;
              axios.put(editrecords, this.category)
              .then(
                ({data})=>{
                  this.category.first_name = '';
				  this.category.last_name = '';
                  this.category.money = '',
                  this.id = ''
                  alert("Customer Updated....!!!");
                  this.CategoryLoad();
                  console.log(data);
                  this.resetForm(); // call the resetForm 
                }
              );
 
           },









// delete customer start

remove(customer){

 var url = `http://127.0.0.1:8000/api/categorys/${customer.id}`;
  axios.delete(url);
  alert("Category Deleteddd");
  this.CategoryLoad();
   }

//end  delete part

			}


          }
    </script>