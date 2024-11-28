"use client";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AddData from "./components/AddData/page";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleAddData(): string {
    throw new Error("Function not implemented.");
  }

  return (
    <Box sx={{ display: "block", textAlign: "center", alignItems: "center" }}>
      <h1>To-DO-App</h1>
      <TableContainer component={Paper} sx={{ width: 650, margin: "auto" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Inserted Data</TableCell>
              <TableCell align="right">
                <AddIcon onClick={handleOpen} sx={{ cursor: "pointer" }} />
                <AddData
                  open={open}
                  handleClose={handleClose}
                  handleAddData={handleAddData}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row"></TableCell>

              <TableCell>
                <EditIcon />
              </TableCell>
              <TableCell>
                <DeleteIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
