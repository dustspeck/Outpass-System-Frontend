import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { PageHeading } from "../../../components/PageHeading/PageHeading";
import AddOutpass from "../AddOutpass/AddOutpass";
import DumpOutpasses from "../Outpasses/DumpOutpasses";
import { OutpassesTable } from "../Outpasses/OutpassesTable";
import { GET_NEW_OUTPASS } from "../../../constants/routes";

const StudentDashboard = () => {
  return (
    <div>
      <PageHeading heading="Student Dashboard" subHeading="Student Dashboard">
        <Button variant="contained" color="primary">
          <Link to={GET_NEW_OUTPASS}>Add Outpass</Link>
        </Button>
      </PageHeading>

      <Container
        maxWidth="xl"
        sx={{
          paddingY: 3,
        }}
      >
        {/* <DumpOutpasses /> */}
        <OutpassesTable />
      </Container>
    </div>
  );
};

export default StudentDashboard;
