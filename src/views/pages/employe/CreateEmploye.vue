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
                                            <h5 class="mb-0 text-info">Create employees</h5>
                                        </div>
                                        <hr/>
                                   
                            <form @submit.prevent="save">

                                <div class="row mb-3">
                                    <label for="inputEnterYourName" class="col-sm-3 col-form-label">First Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control"  v-model="employe.first_name" required id="first_name" placeholder="Enter Your First Name">
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Last Name</label>
                                    <div class="col-sm-9">
                                        <input type="text" class="form-control"  v-model="employe.last_name" required id="last_name" placeholder="Last Name">
                                    </div>
                                </div>


                            <button type="submit" class="btn btn-primary">Submit</button>

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
  name:'CreateEmploye',
    
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


	


// start store
methods: {



//store

save() {

			console.log(this.employe.first_name + this.employe.last_name);

            if(this.employe.id == '')
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
            axios.post("http://127.0.0.1:8000/api/employees/", this.employe)
            .then(

          
            ()=>{
            alert(" employes successfully added");
                //this.EmployeLoad();
               
                this.resetForm(); // call the resetForm
              }
          
            )
 
           },

		},
// end store 


}



</script>