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
        <Typography align="justify">
          As <b>Cirurgias Espirituais</b> têm por objetivo a realização de
          procedimentos visando auxiliar o tratamento
          psíquico-clínico-espiritual de todo aquele que apresentar estas
          necessidades.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography align="justify">
          Na Casa Espírita Eurípedes Barsanulpho, os procedimentos espirituais
          são realizados em sala própria (ambulatório), devidamente higienizada,
          através de um médium e de um auxiliar.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          As Cirurgias Espirituais são realizadas mediante agendamento prévio
          através do Atendimento Fraterno.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Para mais informações sobre o Atendimento Fraterno clique{" "}
          <Link href="/horarios">aqui</Link>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
