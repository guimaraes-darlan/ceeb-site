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
      day: "02 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "04 Segunda",
      name: "Rosângela",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "07 Quinta",
      name: "Cláudio Luiz Mota",
      house: "C. E. Portal da Vida",
    },
    {
      day: "09 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "11 Segunda",
      name: "Nilson Góes",
      house: " - ",
    },
    {
      day: "14 Quinta",
      name: "Letícia",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "16 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "18 Segunda",
      name: "Benício Góes",
      house: "C. E. Seara do Amor",
    },
    {
      day: "21 Quinta",
      name: "Edison Victor Faccin",
      house: "C. E. Manoel Francisco da Luz",
    },
    {
      day: "23 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "25 Segunda",
      name: "Sílvia Silva",
      house: "C. E. Paulo de Tarso",
    },
    {
      day: "28 Quinta",
      name: "Renan",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "23 Sábado",
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
      <Typography variant="h6">
        <strong>Março de 2024</strong>
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
