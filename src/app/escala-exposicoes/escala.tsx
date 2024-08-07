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
      day: "01 Quinta",
      name: "Rita de Cássia Luz Veríssimo",
      house: "GE A Caminho da Luz",
    },
    {
      day: "03 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "05 Segunda",
      name: "Rosângela",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "08 Quinta",
      name: "Ildenes Pereira",
      house: "CE A Caminho do Divino Mestre",
    },
    {
      day: "10 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "12 Segunda",
      name: "Gomes",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "15 Quinta",
      name: "Nilton Aquino",
      house: "CE Manoel Francisco da Luz",
    },
    {
      day: "17 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "19 Segunda",
      name: "Silvia Silva",
      house: "CE Paulo de Tarso",
    },
    {
      day: "22 Quinta",
      name: "Letícia",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "24 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "26 Segunda",
      name: "Benício Goes",
      house: "CE Seara do Amor",
    },
    {
      day: "29 Quinta",
      name: "Kevin",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "31 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
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
        <strong>Agosto de 2024</strong>
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
