"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import Image from "next/image";

export default function CampanhasPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Campanhas" />
      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            fontWeight="bold"
            fontSize={20}
          >{`Lar do Idoso Osvaldo Alípio da Silva - "Lar do Seu Doca"`}</Typography>
          <Image src="/images/doca.png" alt="doca" width="150" height="150" />

          <Typography sx={{ marginTop: "1rem" }}>
            Localizado no bairro Vendaval, Biguaçu, a instituição filantrópica
            de longa permanência de idosos, fundada em 1988 e abriga atualmente
            cerca de 40 idosos
          </Typography>
        </Box>
        <Typography>- Leite</Typography>
        <Typography>- Café</Typography>
        <Typography>- Biscoito</Typography>
      </Container>
    </Box>
  );
}
