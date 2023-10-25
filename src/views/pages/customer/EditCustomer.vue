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
                                <h5 class="mb-0 text-info">update Customer</h5>
                            </div>
                            <hr/>


                            <form @submit="saveChanges">

                            <div class="row mb-3">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">First Name</label>
                                <div class="col-sm-9">
                                    <input v-model="editedCustomer.first_name" type="text" class="form-control" required id="first_name" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Last Name</label>
                                <div class="col-sm-9">
                                    <input v-model="editedCustomer.last_name" type="text" class="form-control" required id="last_name" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Money</label>
                                <div class="col-sm-9">
                                    <input v-model="editedCustomer.money" type="number" class="form-control" required id="money" />
                                </div>
                            </div>
            
                            <!-- <div class="row">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
                                    <button type="submit" class="btn btn-info px-5">Register</button>
                                </div>
                            </div> -->

                        
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
  name: 'EditCustomer',
  data() {
    return {
      editedCustomer: {
        first_name: '',
        last_name: '',
        money: 0,
      },
    };
  },

  created() {
    const customerId = this.$route.params.id; // Get the customer ID from the route parameter
    this.loadCustomerData(customerId);
  },
  methods: {
    loadCustomerData(customerId) {

      const url = `http://127.0.0.1:8000/api/customers/${customerId}`;
      axios.get(url)
        .then((response) => {
          console.log(response.data); // Log the API response data
          this.editedCustomer = response.data.data[0];
          console.log(this.editedCustomer[0]); // Log the editedCustomer object
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveChanges() {
      // Implement your save changes logic here, including making an API call
      // to update the customer's data on the server.
      // After saving, you can navigate back to the list of customers.
      this.$router.push('/customers/update'); // Redirect to the list of customers
    },
  },
};
</script>