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
									<div class="row mb-3">
										<label for="inputEnterYourName" class="col-sm-3 col-form-label">First Name</label>
										<div class="col-sm-9">
											<input type="text" class="form-control" id="inputEnterYourName" placeholder="Enter Your First Name">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputPhoneNo2" class="col-sm-3 col-form-label">Last Name</label>
										<div class="col-sm-9">
											<input type="text" class="form-control" id="inputPhoneNo2" placeholder="Last Name">
										</div>
									</div>
									<div class="row mb-3">
										<label for="inputEmailAddress2" class="col-sm-3 col-form-label">Money</label>
										<div class="col-sm-9">
											<input type="email" class="form-control" id="inputEmailAddress2" placeholder="Email Address">
										</div>
									</div>
					
									<div class="row">
										<label class="col-sm-3 col-form-label"></label>
										<div class="col-sm-9">
											<button type="submit" class="btn btn-info px-5">Register</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		

</template>



<script>
export default {
  name:'CreateCustomer',
}
</script>

<style scoped>
/* Your component-specific styles here */
.page-wrapper {
  color: aliceblue;/* Your styles for the page-wrapper */
}
/* Add more styles as needed */
</style>
