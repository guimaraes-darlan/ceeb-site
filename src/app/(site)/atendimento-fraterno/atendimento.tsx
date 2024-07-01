"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../../components/title-page";
import Image from "next/image";
import ConsulteHorarios from "../../../components/consulte-horarios";

export default function AtendimentoPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Atendimento Fraterno" />
      <Image
        src="/images/atendimento.jpeg"
        alt="atendimento fraterno"
        width="320"
        height="180"
      />
      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography align="justify">
          O <b>Atendimento Fraterno</b> tem como objetivo acolher, auxiliar,
          orientar e encaminhar, quando necessário, para os tratamentos
          oferecidos pela Casa, por meio de um diálogo fraterno embasado nos
          princípios da Doutrina Espírita codificada por Allan Kardec e no
          Evangelho de Jesus.
          <br />
          Na Casa Espírita Eurípedes Barsanulpho, o Atendimento Fraterno é feito
          nos dias de exposições doutrinárias, ao término das mesmas, em sala
          reservada.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold" align="center">
          Na Casa Espírita Eurípedes Barsanulho, o Atendimento Fraterno é feito
          nos dias de exposições doutrinárias, ao término das mesmas, em sala
          reservada.
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
