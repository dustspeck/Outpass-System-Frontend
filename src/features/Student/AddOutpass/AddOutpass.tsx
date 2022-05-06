import React, { useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import EnhancedAddOutpassForm from "./EnhancedAddOutpassForm";
import ShowUserDetails from "./ShowUserDetails";
import styles from "../../../assets/styles/jss/components/FormStyles/formStyles";
import { PageHeading } from "../../../components/PageHeading/PageHeading";

interface IAddOutpassProps {}

const AddOutpass: React.FC<IAddOutpassProps> = () => (
  <div>
    <PageHeading
      heading="📝 Outpass Application"
      subHeading="Application for new outpass"
    />
    <Container maxWidth="xl" sx={styles.background}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="start"
        spacing={4}
        mt={0.5}
      >
        <Grid item xs={12} md={6}>
          <ShowUserDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <EnhancedAddOutpassForm />
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default AddOutpass;
