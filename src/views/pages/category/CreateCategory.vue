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
                                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Category Name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control"  v-model="category.category_name" required  id="category_name" placeholder="category name">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Details</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control"  v-model="category.details" required  id="details" placeholder="details">
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
      name:'CreateCategory',
        
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
    
    
        
    
    
    // start store
    methods: {
    
    
    
    //store
    
    save() {
    
                console.log(this.category.category_name + this.category.details);
    
                if(this.category.id == '')
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
                axios.post("http://127.0.0.1:8000/api/categorys/", this.category)
                .then(
    
              
                ()=>{
                alert(" categorys successfully added");
                    //this.CustomerLoad();
                   
                    this.resetForm(); // call the resetForm
                  }
              
                )
     
               },
    
            },
    // end store 
    
    
    }
    
    
    
    </script>