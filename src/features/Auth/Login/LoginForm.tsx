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
} from "@mui/material";
import { Link } from "react-router-dom";
import { FormikProps } from "formik";
import styles from "../../../assets/styles/jss/components/FormStyles/formStyles";
import { EnhancedLoginFormValues } from "./EnhancedLoginForm";
import { FORGOT_PASSWORD, REGISTER } from "../../../constants/routes";

interface IStudentRegisterFormProps {}

export const LoginForm: React.FC<
  IStudentRegisterFormProps & FormikProps<EnhancedLoginFormValues>
> = (props) => {
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    props;

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <div>
      <Stack spacing={1} sx={styles.heading}>
        <Typography variant='h5' sx={styles.titleText}>
          Login
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          Please enter your email and password
        </Typography>
      </Stack>

      <form onSubmit={handleLoginSubmit}>
        <FormControl required sx={styles.formControl}>
          <Typography variant='subtitle1' sx={styles.label}>
            Email
          </Typography>
          <TextField
            id='emailAddress'
            placeholder='john@doe.com'
            type='email'
            name='email'
            variant='outlined'
            size='small'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(errors.email && touched.email) as boolean}
            helperText={errors.email && touched.email && errors.email}
          />
        </FormControl>

        <br />
        <FormControl required sx={styles.formControl}>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Grid item>
              <Typography variant='subtitle1' sx={styles.label}>
                Password
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='subtitle2'
                // sx={styles.label}
                sx={styles.link}
              >
                <Link to={FORGOT_PASSWORD}>Forgot your password?</Link>
              </Typography>
            </Grid>
          </Grid>
          <TextField
            id='password'
            placeholder='*********'
            type='password'
            name='password'
            variant='outlined'
            size='small'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={(errors.password && touched.password) as boolean}
            helperText={errors.password && touched.password && errors.password}
          />
        </FormControl>
        <br />
        <FormControl sx={styles.formControl}>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Grid item>
              <Button
                sx={styles.secondaryButton}
                variant='contained'
                color='primary'
                type='submit'
                // disabled={authLoading}
                // fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </div>
  );
};
