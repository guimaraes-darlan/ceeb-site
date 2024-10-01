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
  Typography,
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
      day: "03 Quinta",
      name: "Cláudio Luiz Mota",
      house: "CE Portal da Vida",
    },
    {
      day: "05 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "07 Segunda",
      name: "Rosângela",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "10 Quinta",
      name: "Rita de Cássia Luz Veríssimo",
      house: "GE A Caminho da Luz",
    },
    {
      day: "12 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "14 Segunda",
      name: "Letícia",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "17 Quinta",
      name: "Maria Aparecida da Silva",
      house: "CE Caminho da Luz",
    },
    {
      day: "19 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "21 Segunda",
      name: "Gomes",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "24 Quinta",
      name: "Kevin",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "26 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "28 Segunda",
      name: "Benício Goes",
      house: "CE Seara do Amor",
    },
    {
      day: "31 Quinta",
      name: "Inara Schultz",
      house: "SE Tereza de Jesus",
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Escala de Exposições Doutrinárias" />
      <Typography variant="h5">
        <strong>Outubro de 2024</strong>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", fontSize: 14 }}>
                Dia
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: 14 }}>
                Expositor
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", fontSize: 14 }}>
                Instituição
              </TableCell>
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
