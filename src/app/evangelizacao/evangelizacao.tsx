import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import ConsulteHorarios from "../../components/consulte-horarios";

export default function EvangelizacaoPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Evangelização" />

      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Typography>
          <p>
            O{" "}
            <b>
              Departamento de Evangelização da Casa Espírita Eurípedes
              Barsanulpho
            </b>{" "}
            tem por objetivo:
          </p>
          <p>
            <b>a)</b> promover o conhecimento dos ensinos morais do Evangelho de
            Jesus à luz da Doutrina Espírita;
          </p>
          <p>
            <b>b)</b> promover a integração do evangelizando consigo mesmo, com
            o próximo e com Deus;
          </p>
          <p>
            <b>c)</b> proporcionar o estudo da lei natural que rege o Universo,
            da natureza, origem e destino dos Espíritos bem como de suas
            relações com o mundo corporal;
          </p>
          <p>
            <b>d)</b> oferecer ao evangelizando a oportunidade de perceber-se
            como homem integral, crítico, consciente, participativo, herdeiro de
            si mesmo, cidadão do Universo, agente de transformação de seu meio,
            rumo a toda perfeição de que é suscetível;
          </p>
          <p>
            <b>e)</b> conceder aos jovens oportunidades de desempenhar tarefas
            compatíveis com as suas capacidades e potencialidades na Casa
            Espírita Eurípedes Barsanulpho;
          </p>
          <p>
            <b>f)</b> conscientizar os jovens de que eles serão os continuadores
            nas atividades do Movimento Espírita;
          </p>
          <p>
            <b>g)</b> favorecer e incentivar o intercâmbio do jovem com outras
            juventudes de outras Casas Espíritas e sua integração no Movimento
            Espírita em geral.
          </p>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
