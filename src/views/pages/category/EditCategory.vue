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
                                <h5 class="mb-0 text-info">update Category</h5>
                            </div>
                            <hr/>


                            <form @submit.prevent="saveChanges">

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
        category: {
                  id: '',
                  category_name: '',
                  details: '',
      },
    };
  },

  created() {
    const categoryId = this.$route.params.id; // Get the customer ID from the route parameter
    this.loadCategoryData(categoryId);
  },
  methods: {
    loadCategoryData(categoryId) {

      const url = `http://127.0.0.1:8000/api/categorys/${categoryId}`;
      axios.get(url)
        .then((response) => {
          console.log(response.data); // Log the API response data
          this.category = response.data.data[0];
          console.log(this.category[0]); // Log the editedCustomer object
        })
        .catch((error) => {
          console.error(error);
        });

      },
      


   //update start

saveChanges() {
  try {
    const category =  axios.put(
      "http://127.0.0.1:8000/api/categorys/" + this.category.id,
      {
        category_name: this.category.category_name,
        details: this.category.details,
       
      }
    );

    console.log(category.data);
    alert("Category updated!!");
  } catch (e) {
    console.log(e);
  }


   



    


  
  },
},
}

</script>
