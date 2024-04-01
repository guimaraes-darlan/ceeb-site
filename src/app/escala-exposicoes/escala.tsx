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
      day: "01 Segunda",
      name: "Rosângela",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "04 Quinta",
      name: "Andreia Martins Cândido",
      house: "C. E. Caminho do Amor",
    },
    {
      day: "06 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "08 Segunda",
      name: "Ildenes Pereira",
      house: "C. E. A Caminho do Divino Mestre",
    },
    {
      day: "11 Quinta",
      name: "Rita de Cássia Luz Veríssimo",
      house: "G. E. A Caminho da Luz",
    },
    {
      day: "13 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "15 Segunda",
      name: "Augusto César Valença Motta",
      house: "C. E. Seara do Amor",
    },
    {
      day: "18 Quinta",
      name: "Márcia Goes",
      house: "C. E. Portal da Vida",
    },
    {
      day: "20 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "22 Segunda",
      name: "Walmir Matos",
      house: "C. E. Seara dos Pobres",
    },
    {
      day: "25 Quinta",
      name: "Inara Schultz",
      house: "S. E. Tereza de Jesus",
    },
    {
      day: "27 Sábado",
      name: "Estudo do Evangelho",
      house: "Casa Espírita Eurípedes Barsanulpho",
    },
    {
      day: "29 Segunda",
      name: "Benicio Goes",
      house: "C. E. Seara do Amor",
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
        <strong>Abril de 2024</strong>
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
