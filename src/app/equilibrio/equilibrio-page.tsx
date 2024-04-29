import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import Link from "next/link";
import ConsulteHorarios from "../../components/consulte-horarios";

export default function EquilibrioPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Equilíbrio Espiritual" />

      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography align="justify">
          O Tratamento de <b>Equilíbrio Espiritual</b> tem por objetivo auxiliar
          o reequilíbrio psíquico-emocional-espiritual de todo aquele que
          apresentar estas necessidades.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Os tratamentos de equilíbrio espiritual serão realizados em sala
          própria e adequada (ambulatório), devidamente higienizada, através de
          médiuns passistas utilizando as técnicas de fluido terapia espírita.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          O Tratamento de Equilíbrio Espiritual é realizado mediante agendamento
          prévio através do Atendimento Fraterno.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Para mais informações sobre o Tratamento de Equilíbrio Espiritual
          clique <Link href="/horarios">aqui</Link>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
