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
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">order_id</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="payment.order_id" id="order_id" placeholder="Enter Your First Name">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">paymatent_date</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="payment.paymatent_date" id="paymatent_date" placeholder="Last Name">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">amount</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="payment.amount" id="amount" placeholder="Email Address"> 
                                            </div>
                                        </div>
                        

                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">paymentmethod</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="payment.paymentmethod" id="paymentmethod" placeholder="paymentmethod"> 
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
      name:'CreatePayment',
        
    // start...
    
    data(){
      return{
    
    
    
    orders: {},
    
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
    
    
        
    
    
    // start store
    methods: {
    
    
    
    //store
    
    save() {
    
                console.log(this.payment.order_id + this.payment.paymatent_date + this.payment.amount);
    
                if(this.payment.id == '')
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
                axios.post("http://127.0.0.1:8000/api/payments/", this.payment)
                .then(
    
              
                ()=>{
                alert("payments successfully added");
                    //this.CustomerLoad();
                   
                    this.resetForm(); // call the resetForm
                  }
              
                )
     
               },
    
            },
    // end store 
    
    
    }
    
    
    
    </script>