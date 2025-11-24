import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function AddressForm({ customerData, setCustomerData }) {
  const handleChange = (field) => (e) => {
    setCustomerData({ ...customerData, [field]: e.target.value });
    console.log("Updated customerData:", { ...customerData, [field]: e.target.value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField required id="firstName" label="First name" fullWidth variant="standard" value={customerData.first_name} onChange={handleChange("first_name")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="lastName" label="Last name" fullWidth variant="standard" value={customerData.last_name} onChange={handleChange("last_name")} />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="address1" label="Address line 1" fullWidth variant="standard" value={customerData.address_1} onChange={handleChange("address_1")} />
        </Grid>
        <Grid item xs={12}>
          <TextField id="address2" label="Address line 2" fullWidth variant="standard" value={customerData.address_2} onChange={handleChange("address_2")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="city" label="City" fullWidth variant="standard" value={customerData.city} onChange={handleChange("city")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" label="State/Province/Region" fullWidth variant="standard" value={customerData.state} onChange={handleChange("state")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="zip" label="Zip / Postal code" fullWidth variant="standard" value={customerData.zip} onChange={handleChange("zip")} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="country" label="Country" fullWidth variant="standard" value={customerData.country} onChange={handleChange("country")} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
