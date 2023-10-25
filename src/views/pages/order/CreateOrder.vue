<template>
    <div class="page-content">
                    <!--breadcrumb-->
            
                    <!--end breadcrumb-->
        
                    <!--end row-->
                    <div class="row">
                        <div class="col-xl-9 mx-auto">
                    
                            <div class="card border-top border-0 border-4 border-info">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="card-title d-flex align-items-center">
                                            <div><i class="bx bxs-user me-1 font-22 text-info"></i>
                                            </div>
                                            <h5 class="mb-0 text-info">Create Customer</h5>
                                        </div>
                                        <hr/>

                                        <form @submit.prevent="save">

                                        <div class="row mb-3">
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">customer_id</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="order.customer_id" required id="customer_id" placeholder="customer_id">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">employer_id</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="order.employer_id" required id="employer_id" placeholder="employer_id">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">product_id</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="order.product_id" required id="product_id" placeholder="product_id">
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">total_order</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="order.total_order" required id="total_order" placeholder="employer_id">
                                            </div>
                                        </div>

                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">order_date</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="order.order_date" required id="order_date" placeholder="employer_id">
                                            </div>
                                        </div>
                        
                                        <div class="row">
                                            <label class="col-sm-3 col-form-label"></label>
                                            <div class="col-sm-9">
                                                <button type="submit" class="btn btn-info px-5">Register</button>
                                            </div>
                                        </div>


                                  </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end row-->
                </div>
    
    </template>
    
    
    
    
    <script>

    import axios from 'axios';
    
    export default {
      name:'CreateOrder',
        
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
    
    
        
    
    
    // start store
    methods: {
    
    
    
    //store
    
    save() {
    
                console.log(this.order.customer_id + this.order.employer_id + this.order.product_id);
    
                if(this.order.id == '')
                  {
                    this.saveData();
                  }
                  else
                  {
                    this.updateData();
                  }      
     
               },
               saveData()
               {
                axios.post("http://127.0.0.1:8000/api/orders/", this.order)
                .then(
    
              
                ()=>{
                alert("orders successfully added");
                    //this.CustomerLoad();
                   
                    this.resetForm(); // call the resetForm
                  }
              
                )
     
               },
    
            },
    // end store 
    
    
    }
    
    
    
    </script>