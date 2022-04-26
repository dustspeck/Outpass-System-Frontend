import { Button } from "@mui/material";
import React from "react";
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
      <DumpOutpasses />
    </div>
  );
};

export default StudentDashboard;
