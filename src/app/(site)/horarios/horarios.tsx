"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../../components/title-page";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function HorariosPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Horários" />

      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Grid container>
          <Grid xs={12} sx={{ border: 1 }}>
            <Typography align="center" fontWeight="bold" variant="h6">
              Atividades
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Palestras Doutrinárias</Typography>
          </Grid>
          <Grid xs={4} borderTop={1} borderBottom={1}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography align="center">Segundas-Feiras</Typography>
              <Typography align="center">Quintas-Feiras</Typography>
              <Typography align="center">Sábados</Typography>
            </Container>
          </Grid>
          <Grid xs={4} border={1}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography align="center">19:30</Typography>
              <Typography align="center">20:00</Typography>
              <Typography align="center">19:00</Typography>
            </Container>
          </Grid>
          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Estudo da Doutrina Espírita</Typography>
          </Grid>
          <Grid xs={4} borderTop={1} borderBottom={1}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography align="center">Segundas-Feiras</Typography>
              <Typography align="center">Quintas-Feiras</Typography>
              <Typography align="center">Sábados</Typography>
            </Container>
          </Grid>
          <Grid xs={4} border={1}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography align="center">20:30 - 21:30</Typography>
              <Typography align="center">21:00 - 22:00</Typography>
              <Typography align="center">20:00 - 21:00</Typography>
            </Container>
          </Grid>
          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Cirurgias Espirituais</Typography>
          </Grid>
          <Grid xs={4} borderTop={1} borderBottom={1}>
            <Typography align="center">Sábados</Typography>
          </Grid>
          <Grid xs={4} border={1}>
            <Typography align="center">14:00 - 17:00</Typography>
          </Grid>

          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Desobsessão</Typography>
          </Grid>
          <Grid xs={4} borderTop={1} borderBottom={1}>
            <Typography align="center">Sextas-Feiras</Typography>
          </Grid>
          <Grid xs={4} border={1}>
            <Typography align="center">18:00 - 20:00</Typography>
          </Grid>

          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Equilíbrio Espiritual</Typography>
          </Grid>
          <Grid xs={4} borderTop={1} borderBottom={1}>
            <Typography align="center">Sábados</Typography>
          </Grid>
          <Grid xs={4} border={1}>
            <Typography align="center">14:00 - 17:00</Typography>
          </Grid>

          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Atendimento Fraterno</Typography>
          </Grid>
          <Grid xs={8} borderTop={1} borderBottom={1} borderRight={1}>
            <Typography align="center">
              Quintas e Sábados, após as palestras doutrinárias
            </Typography>
          </Grid>

          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Evangelização Infanto-juvenil</Typography>
          </Grid>
          <Grid xs={8} borderTop={1} borderBottom={1} borderRight={1}>
            <Typography align="center">
              Quintas e Sábados durante as palestras
            </Typography>
          </Grid>

          <Grid xs={12}>
            <Container sx={{ height: "0.5rem" }} />
          </Grid>
          <Grid
            xs={4}
            sx={{
              border: 1,
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography>Recreação</Typography>
          </Grid>
          <Grid xs={8} borderTop={1} borderBottom={1} borderRight={1}>
            <Typography align="center">
              Segundas durante as palestras
            </Typography>
          </Grid>
        </Grid>

        <Container sx={{ height: "1rem" }} />
        <Typography align="center" variant="h6">
          Mais informações: Pessoalmente junto aos trabalhadores da casa.
        </Typography>
      </Container>
    </Box>
  );
}
