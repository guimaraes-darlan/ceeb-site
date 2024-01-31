"use client";

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TitlePage from "../../components/title-page";

interface Scale {
  day: string;
  name: string;
  house: string;
}

export default function EscalaPage() {
  function createData(dayOfWeek: string, name: string, institution: string) {
    return { dayOfWeek, name, institution };
  }
  const listScale: Scale[] = [
    {
      day: "01 Quinta",
      name: "Renan",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "03 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "05 Sábado",
      name: "Rosângela",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
  ];

  const rows = [
    createData("Segunda", "Rosangela", "Casa Espírita Eurípedes Barsanulpho"),
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Escala de Exposições Doutrinárias" />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, borderCollapse: "collapse" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Dia</TableCell>
              <TableCell>Expositor</TableCell>
              <TableCell>Instituição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listScale.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.house}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
