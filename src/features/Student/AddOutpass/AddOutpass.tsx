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

interface IAddOutpassProps {}

const AddOutpass: React.FC<IAddOutpassProps> = () => (
  <Box sx={styles.background}>
    <Container maxWidth="xl">
      <Stack spacing={1} sx={styles.heading}>
        <Typography variant="h5" sx={styles.titleText}>
          📝 Outpass Application
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Application for new outpass
        </Typography>
      </Stack>
      <Divider />
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
  </Box>
);

export default AddOutpass;
