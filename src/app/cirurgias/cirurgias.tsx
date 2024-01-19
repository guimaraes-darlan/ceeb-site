"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import ConsulteHorarios from "../../components/consulte-horarios";
import Link from "next/link";

export default function CirurgiasPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Cirurgias Espirituais" />

      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography>
          Os <b>procedimentos espirituais</b> têm por objetivo a realização de
          <b>cirurgias espirituais</b> visando auxiliar o tratamento
          psíquico-clínico-espiritual de todo aquele que apresentar estas
          necessidades.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Na <b>Casa Espírita Eurípedes Barsanulpho</b>, os procedimentos
          espirituais são realizados em sala própria e adequada (ambulatório),
          devidamente higienizada, através de um médium e de um auxiliar do sexo
          masculino para os procedimentos em pacientes do mesmo sexo e do sexo
          feminino para os procedimentos em pacientes do mesmo sexo.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          As Cirurgias Espirituais são realizadas às segundas-feiras, mediante
          agendamento prévio, o qual é feito durante o Atendimento Fraterno.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Para mais informações sobre o Atendimento Fraterno clicando{" "}
          <Link href="/horarios">aqui</Link>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
