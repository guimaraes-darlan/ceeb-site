"use client";

import { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Container sx={{ height: "2rem" }} />
      <Typography variant="h4" fontWeight="bold">
        Seja Bem Vindo!
      </Typography>
      <Container sx={{ height: "2rem" }} />

      <Container sx={{ height: "0.5rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography align="center">
          A Casa Espírita Eurípedes Barsanulpho, fundada em 29 de agosto de
          2014, designada “CEEB”, é uma organização religiosa, de caráter
          educacional, cultural, de assistência social, filantrópica, sem fins
          lucrativos.
        </Typography>
        <Container sx={{ height: "4rem" }} />
        <Typography
          align="center"
          variant="h6"
          fontWeight="bold"
          fontStyle="italic"
          fontSize={14}
        >
          A Casa Espírita Eurípedes Barsanulpho informa a todos os seus
          frequentadores que as campanhas de doação são promovidas sempre pela
          própria Instituição. Portanto, nenhuma pessoa física ou jurídica
          possui autorização para angariar doações em nome da Instituição, sob
          pena das responsabilizações previstas na Legislação Brasileira.
        </Typography>
      </Container>
    </Box>
  );
}
