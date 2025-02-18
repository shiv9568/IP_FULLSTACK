import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

function createData(clubImage, Date, Event, ClubName, Status) {
    return { clubImage, Date, Event, ClubName, Status };
}

const rows = [
    createData("Image", 159, 6.0, 24, 4.0),
    createData("Image", 237, 9.0, 37, 4.3),
    createData("Image", 262, 16.0, 24, 6.0),
    createData("Image", 305, 3.7, 67, 4.3),
    createData("Image", 356, 16.0, 49, 3.9),
    createData("Image", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">
                            Club Image
                        </StyledTableCell>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell>Events</StyledTableCell>
                        <StyledTableCell>Club Name</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Date}>
                            <StyledTableCell align="center">
                                {row.clubImage}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.Date}
                            </StyledTableCell>
                            <StyledTableCell>{row.Event}</StyledTableCell>
                            <StyledTableCell>{row.ClubName}</StyledTableCell>
                            <StyledTableCell>{row.Status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
