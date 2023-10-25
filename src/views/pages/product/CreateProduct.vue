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
                                            <h5 class="mb-0 text-info">Create Product</h5>
                                        </div>
                                        <hr/>



                                        <form @submit.prevent="save">

                                        <div class="row mb-3">
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Product  Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="product.product_name" required id="product_name" placeholder="Enter Your First Name">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Product_Description</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="product.product_description" required id="product_description" placeholder="Last Name">
                                            </div>
                                        </div>


                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Category_id</label>
                                            <div class="col-sm-9">
                                                <input type="number" class="form-control" v-model="product.category_id" required id="category_id" placeholder="category_id">
                                            </div>
                                        </div>

                                         
                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">paymatent_date</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="product.paymatent_date" required id="paymatent_date" placeholder="paymatent_date">
                                            </div>
                                        </div>


                                         
                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Price</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="product.price" required id="price" placeholder="price">
                                            </div>
                                        </div>



                                        <div class="row mb-3">
                                            <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Quantity</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" v-model="product.quantity" required id="quantity" placeholder="quantity">
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
      name:'CreateProduct',
        
    // start...
    
    data(){
      return{
    
    
    
        products: {},
    
        resetForm(){
       
          this.product={
                  id: '',
                  product_name: '',
                  product_description: '',
                  category_id: '',
                  paymatent_date: '',
                  price: '',
                  quantity: '',
                
                   }
    
        },
    
    
        product:{
                  id: '',
                  product_name: '',
                  product_description: '',
                  category_id: '',
                  paymatent_date: '',
                  price: '',
                  quantity: '',
                
                }
                }
       
        },
    
    
        
    
    
    // start store
    methods: {
    
    
    
    //store
    
    save() {
    
                console.log(this.product.product_name + this.product.product_description + this.product.category_id);
    
                if(this.product.id == '')
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
                axios.post("http://127.0.0.1:8000/api/products/", this.product)
                .then(
    
              
                ()=>{
                alert(" products successfully added");
                    //this.CustomerLoad();
                   
                    this.resetForm(); // call the resetForm
                  }
              
                )
     
               },
    
            },
    // end store 
    
    
    }
    
    
    
    </script>