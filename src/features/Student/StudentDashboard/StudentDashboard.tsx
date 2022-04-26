import React from "react";
import { Button, Container } from "@mui/material";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import AddOutpass from "../AddOutpass/AddOutpass";
import DumpOutpasses from "../Outpasses/DumpOutpasses";

const StudentDashboard = () => {
  return (
    <div>
      <PageHeading heading="Student Dashboard" subHeading="Student Dashboard">
        <Button variant="contained" color="primary">
          Add Outpass
        </Button>
      </PageHeading>

      <Container maxWidth="xl">
        <DumpOutpasses />
      </Container>
    </div>
  );
};

export default StudentDashboard;
