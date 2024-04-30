import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import Link from "next/link";
import ConsulteHorarios from "../../components/consulte-horarios";

export default function IrradiacaoPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Irradiação" />

      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography align="justify">
          A <strong>Irradiação</strong> é uma assistência espiritual à distância
          através da doação de fluidos, visando o bem-estar físico, emocional e
          espiritual das pessoas que estejam doentes cujos nomes foram
          relacionados e encontram-se sobre a tribuna de exposições doutrinárias
          e de todos os enfermos em geral que estejam hospitalizados
          (emergências, centros cirúrgicos, unidades de terapia intensiva, salas
          de recuperação, enfermarias etc.), em suas residências, em casas de
          repouso, nas ruas etc.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Os nomes para receberem a irradiação serão coletados em um recipiente
          durante a semana anterior ao dia da irradiação. Para isto serão
          disponibilizadas pequenas fichas a serem preenchidas pelos
          solicitantes da irradiação, as quais, depois de preenchidas, serão
          depositadas em um recipiente colocado na entrada do Salão de
          Exposições Doutrinárias. Nesta ficha constará o nome da pessoa que
          receberá a irradiação, endereço onde o paciene se encontra e a doença
          de que está acometido.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          A irradiação será feita no Salão de Exposições Doutrinárias às
          segundas-feiras das 19:10 horas às 19:20 horas.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography>
          Aos sábados, a irradiação é realizada para a{" "}
          <strong>humanidade</strong>, no Salão de Exposições Doutrinárias das
          18:45 horas às 18:55 horas.
        </Typography>
        <Container sx={{ height: "1rem" }} />

        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
