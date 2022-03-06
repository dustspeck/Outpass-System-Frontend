import React, { useEffect } from "react";
import { Grid, Container, Box } from "@mui/material";
import EnhancedLoginForm from "./EnhancedLoginForm";
import styles from "../../../assets/styles/jss/features/AuthStyles/authStyles";

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
  return (
    <Box sx={styles.background}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={styles.illustrationContainer} xs={12} md={6}>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container maxWidth="sm">
            <EnhancedLoginForm />
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
