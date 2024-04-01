import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

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
      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "90%",
          },
        }}
      >
        <Typography align="center" variant="h6">
          <p>
            A <strong>Casa Espírita Eurípedes Barsanulpho</strong>, fundada em
            29 de agosto de 2014, é uma organização religiosa, de caráter
            educacional, cultural, de assistência social, filantrópica, sem fins
            lucrativos, e tem por objetivos a prática da caridade espiritual,
            moral e material por todos os meios ao seu alcance e dentro dos
            princípios da Doutrina Espírita codificada por Allan Kardec.
          </p>
          Conheça as nossas atividades e horários de funcionamento e seja muito
          bem-vindo
        </Typography>
        <Container sx={{ height: "2rem" }} />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
            <Image
              src="/images/frente.jpg"
              alt="img1"
              width={128 * 3.5}
              height={96 * 3.5}
              style={{ paddingRight: "1rem" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Image
              src="/images/image-01.jpeg"
              alt="img1"
              width={128 * 3.5}
              height={96 * 3.5}
            />
          </Grid>
        </Grid>

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
