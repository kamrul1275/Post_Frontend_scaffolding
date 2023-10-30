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
                                <h5 class="mb-0 text-info">update product</h5>
                            </div>
                            <hr/>


  
            <form @submit.prevent="saveChanges">

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
                            <input type="text" class="form-control" v-model="product.paymatent_date" required id="paymatent_date" placeholder="paymatent_date....">
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
  name: 'EditProduct',
  data() {
    return {
        product: {
                  id: '',
                  product_name: '',
                  product_description: '',
                  category_id: '',
                  paymatent_date: '',
                  price: '',
                  quantity: '',
      },
    };
  },

  created() {
    const productId = this.$route.params.id; // Get the customer ID from the route parameter
    this.loadProductData(productId);
  },
  methods: {
    loadProductData(productId) {

      const url = `http://127.0.0.1:8000/api/products/${productId}`;
      axios.get(url)
        .then((response) => {
          console.log(response.data); // Log the API response data
          this.product = response.data.data[0];
          console.log(this.product[0]); // Log the editedCustomer object
        })
        .catch((error) => {
          console.error(error);
        });

      },
      


   //update start

saveChanges() {


console.log(this.product.product_name);
  //alert('oky');
  try {
    const product =  axios.put(
      "http://127.0.0.1:8000/api/products/" + this.product.id,
      {
        product_name: this.product.product_name,
        product_description:this.product.product_description,
        paymatent_date:this.product.paymatent_date,
        category_id:this.product.category_id,
        price:this.product.price,
        quantity:this.product.quantity,
       
      }
    );

    //console.log(product.data);
    alert("product updated!!");
  } catch (e) {
    console.log(e);
  }


   



    


  
  },
},
}

</script>
