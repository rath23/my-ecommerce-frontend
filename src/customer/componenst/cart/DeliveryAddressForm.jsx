import { Box, Button, Grid2, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addressCard/AddressCard";

function DeliveryAddressForm() {
  const handleSubmit=(e)=>{
    e.preventDefault(); // To stop from page being refresed
    console.log("form submitted");
    const data = new FormData(e.currentTarget);
   
    const address= {
      firtName: data.get('firstName'),
      lastName: data.get('lastName'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      phoneNumber: data.get('phoneNumber'),
    }
    console.log(address);
  }
  return (
    <div>
      {/* <Grid2 container spacing={4}> */}
      <div className="lg:grid grid-cols-2 gap-4">
        <div className="border rounded-e-md shadow-md h-[29rem] overflow-y-scroll mb-4">
          <div className="p-5 py-7 border-b cusor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(79 70 229)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </div>

        <div>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 grid-rows-5">
                <div>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </div>
                <div className="col-span-2 row-span-2">
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="zipcode"
                    name="zipcode"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                  />
                </div>
                <div>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(79 70 229)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>{" "}
                </div>
              </div>
            </form>
          </Box>
        </div>
      </div>
      {/* </Grid2> */}
    </div>
  );
}

export default DeliveryAddressForm;
