import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  TextField,
  Typography,
  Grid,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import { FormikProps } from "formik";
import styles from "../../../assets/styles/jss/components/FormStyles/formStyles";
import { EnhancedAddOutpassFormValues } from "./EnhancedAddOutpassForm";

interface IFormProps {}

export const AddOutpassForm: React.FC<
  IFormProps & FormikProps<EnhancedAddOutpassFormValues>
> = props => {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = props;

  const handleAddOutpassSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <div>
      <Stack spacing={1} sx={styles.heading}>
        <Typography variant="subtitle2" color="text.secondary">
          Fill this application to get a new digital outpass
        </Typography>
      </Stack>
      <form onSubmit={handleAddOutpassSubmit}>
        <Grid>
          <Grid item>
            <FormControl required sx={styles.formControl}>
              <Typography variant="subtitle1" sx={styles.label}>
                Leave Address
              </Typography>
              <TextField
                id="address"
                placeholder="Where are you going?"
                type="text"
                name="address"
                variant="outlined"
                size="small"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(errors.address && touched.address) as boolean}
                helperText={errors.address && touched.address && errors.address}
              />
            </FormControl>
          </Grid>
          <Grid item sx={styles.fontGridColumn}>
            <FormControl required sx={styles.formControl}>
              <Typography variant="subtitle1" sx={styles.label}>
                From
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  inputFormat="dd MMM yyyy hh:mm a"
                  renderInput={props => (
                    <TextField
                      {...props}
                      size="small"
                      variant="outlined"
                      error={(errors.from && touched.from) as boolean}
                      helperText={errors.from && touched.from && errors.from}
                    />
                  )}
                  value={values.from}
                  onChange={newValue => {
                    setFieldValue("from", newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl required sx={styles.formControl}>
              <Typography variant="subtitle1" sx={styles.label}>
                To
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  inputFormat="dd MMM yyyy hh:mm a"
                  renderInput={props => (
                    <TextField
                      {...props}
                      size="small"
                      variant="outlined"
                      error={(errors.to && touched.to) as boolean}
                      helperText={errors.to && touched.to && errors.to}
                    />
                  )}
                  value={values.to}
                  onChange={newValue => {
                    setFieldValue("to", newValue);
                  }}
                />
              </LocalizationProvider>
              {/* <Typography variant="caption" ml="1rem" mt="0.2rem" color="">
                {errors.reason && touched.reason && errors.reason}
              </Typography> */}
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl required sx={styles.formControl}>
              <Typography variant="subtitle1" sx={styles.label}>
                Reason
              </Typography>
              <TextField
                id="reason"
                placeholder="Reason for your outpass"
                type="text"
                name="reason"
                variant="outlined"
                size="small"
                value={values.reason}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(errors.reason && touched.reason) as boolean}
                helperText={errors.reason && touched.reason && errors.reason}
                rows={3}
                multiline
              />
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl required sx={styles.formControl}>
              <Typography variant="subtitle1" sx={styles.label}>
                Mode of Transport
              </Typography>
              <TextField
                id="transport"
                placeholder="Mode of Transport"
                type="text"
                name="transport"
                variant="outlined"
                size="small"
                value={values.transport}
                onChange={handleChange}
                onBlur={handleBlur}
                error={(errors.transport && touched.transport) as boolean}
                helperText={
                  errors.transport && touched.transport && errors.transport
                }
              />
            </FormControl>
          </Grid>

          <Grid item width="100%">
            <FormControlLabel
              control={
                <Checkbox
                  name="isParentContact"
                  value={values.isParentConsent}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              }
              label="Have you taken consent from your parent/guardian?"
            />
          </Grid>

          <Grid item mt={2}>
            <FormControl sx={styles.formControl}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // disabled={authLoading}
                fullWidth
              >
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
      {/* {JSON.stringify(values, null, 2)} */}
    </div>
  );
};
