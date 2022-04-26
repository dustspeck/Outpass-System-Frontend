import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { format } from "date-fns";
import { supabase } from "../../../config/config";
import GenerateQR from "./GenerateQR";

interface OutpassesTableProps {}

//  "id": "0af5e313-a8ec-479d-9d2c-dc9bfc914ade",
//   "created_at": "2022-03-15T08:48:24+00:00",
//   "student_id": "80b817b8-4ef7-4607-bcff-0cd46274fe72",
//   "signed_by": null,
//   "from": "2022-03-15T08:48:37+00:00",
//   "to": "2022-03-16T08:48:40+00:00",
//   "address": null,
//   "transport": null,
//   "reason": null,
//   "is_consent": true

export const OutpassesTable: React.FC<OutpassesTableProps> = () => {
  const [outpasses, setOutpasses] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchOutpasses = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("outpass")
        .select("*")
        .eq("student_id", "80b817b8-4ef7-4607-bcff-0cd46274fe72");
      if (error) throw "Error";
      setOutpasses(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOutpasses();
  }, []);
  return (
    <div>
      {isError ? (
        <div>Error fetching outpasses</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Created At</TableCell>
                <TableCell align="right">Is Approved</TableCell>
                <TableCell align="right">Duration</TableCell>
                <TableCell align="right">Generate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outpasses.map(outpass => (
                <TableRow
                  key={outpass.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {outpass.id}
                  </TableCell>
                  <TableCell align="right">
                    {format(new Date(outpass.created_at), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell align="right">
                    {outpass.signed_by ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">
                    {format(new Date(outpass.from), "dd/MM/yyyy")} -
                    {format(new Date(outpass.to), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell align="right">
                    <GenerateQR id={outpass.id} disabled={!outpass.signed_by} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
