import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

export const MaterialForm = () => {
  return (
    <div className="Form">
      <br />
      <h1>Sign Up</h1>
      <Grid container>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="First Name:" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Last Name:" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Password:" type="password" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Mobile No:" type="number" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Email-Id:" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Address:" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="Pin Code:" type="number" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="City:" />
        </Grid>
        <Grid item xs={4}>
          <br />
          <br />
          <TextField label="State:" />
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>{" "}
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <br />
          <br />
          <br />
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Grid>
        <Grid item xs={3}>
          <br />
          <br />
          <br />
          <Button variant="contained" color="success">Submit</Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
