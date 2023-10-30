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
                                <h5 class="mb-0 text-info">update Employe</h5>
                            </div>
                            <hr/>


                            <form @submit="saveChanges">

                            <div class="row mb-3">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">First Name</label>
                                <div class="col-sm-9">
                                    <input v-model="employe.first_name" type="text" class="form-control" required id="first_name" />
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Last Name</label>
                                <div class="col-sm-9">
                                    <input v-model="employe.last_name" type="text" class="form-control" required id="last_name" />
                                </div>
                            </div>

                         
                         
                        
                                <div class="row">
                                    <label class="col-sm-3 col-form-label"></label>
                                    <div class="col-sm-9">
                                    <button type="submit" class="btn btn-info px-5">Update</button>
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


<script>import axios from 'axios';

export default {
  name: 'EditEmploye',
  data() {
    return {
        employe: {
              first_name: '',
			        last_name: '',
            
      },
    };
  },


  
  created() {
    const employeId = this.$route.params.id; // Get the customer ID from the route parameter
    this.loadEmployeData(employeId);
  },
  methods: {
    loadEmployeData(employeId) {

      console.log(this.employeId);

      //alert('oky');

      const url = `http://127.0.0.1:8000/api/employees/${employeId}/edit`;
      axios.get(url)
        .then((response) => {
          console.log(response.data); // Log the API response data
          this.employe = response.data.data[0];
          console.log(this.employe[0]); // Log the editedCustomer object
        })
        .catch((error) => {
          console.error(error);
        });

      },
      
//update start

saveChanges() {
  try {
    const editedCustomer =  axios.put(
      "http://127.0.0.1:8000/api/employees/" + this.employeId.id,
      {
        first_name: this.editedCustomer.first_name,
        last_name: this.editedCustomer.last_name,
       
      }
    );

    console.log(editedCustomer.data);
    alert("User updated!");
  } catch (e) {
    console.log(e);
  }


   



    


  
  },
},
}

</script>


