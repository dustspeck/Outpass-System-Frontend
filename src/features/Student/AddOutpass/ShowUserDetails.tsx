import React, { useState } from "react";
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
  Divider,
} from "@mui/material";

import { format } from "date-fns";
import styles from "../../../assets/styles/jss/components/FormStyles/formStyles";

const ShowUserDetails = () => {
  const [user, setUser] = useState({
    name: "Vaibhav Garg",
    regNo: "199302147",
    year: "3",
    course: "B.Tech",
    branch: "IT",
    block: "B3",
    room: "312",
  });

  return (
    <div>
      <Stack spacing={1} sx={styles.heading}>
        <Typography variant="subtitle2" color="text.secondary">
          Verify your details
        </Typography>
      </Stack>
      <Grid sx={styles.infoGrid}>
        <Grid item>
          <Typography>Name</Typography>
          <Typography>{user.name}</Typography>
        </Grid>
        <Grid item>
          <Typography>Registration No.</Typography>
          <Typography>{user.regNo}</Typography>
        </Grid>
        <Grid item>
          <Typography>Year</Typography>
          <Typography>{user.year}</Typography>
        </Grid>
        <Grid item>
          <Typography>Course/Branch</Typography>
          <Typography>
            {user.course} {user.branch}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Room no.</Typography>
          <Typography>
            {user.block} {user.room}
          </Typography>
        </Grid>

        <Grid item>
          <Typography>Application Date</Typography>
          <Typography>{format(new Date(), "dd MMM YYY")}</Typography>
        </Grid>
      </Grid>
      <Grid mt={4}>
        <Typography variant="subtitle2" color="text.secondary">
          Important Points
        </Typography>
        <ul>
          <li>
            <Typography>
              Leave application must be received 2 days in advanced in C.W.
              Office.
            </Typography>
          </li>
          <li>
            <Typography>
              I agree and abide by all the Hostel Rules of Stay.
            </Typography>
          </li>
          <li>
            <Typography>
              I agree and accept that the information provided by me is correct
              to the best of my knowledge.
            </Typography>
          </li>
        </ul>
      </Grid>
    </div>
  );
};

export default ShowUserDetails;
