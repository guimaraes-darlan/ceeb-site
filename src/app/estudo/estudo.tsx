"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import Image from "next/image";
import { AccessTime } from "@mui/icons-material";
import Link from "next/link";
import ConsulteHorarios from "../../components/consulte-horarios";

export default function EstudoPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Estudo da Doutrina Espírita" />
      <Image
        src="/images/pentateuco_kardec.webp"
        alt="estudo"
        width="275"
        height="300"
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
        <Typography>
          O Estudo da Doutrina Espírita visa proporcionar o conhecimento amplo
          da Doutrina Espírita codificada por Allan Kardec aos tarefeiros da
          Casa Espírita Eurípedes Barsanulpho, frequentadores e interessados, de
          forma regular, metódica, contínua, séria e sistematizada.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          A Casa Eurípedes Barsanulpho tem diversos grupos de estudo em
          andamento, bem como inscrições abertas para novas turmas. Para mais
          informações, venha até a nossa casa em algum dos dias de Exposição
          Doutrinária e iremos lhe apresentar as possibilidades existentes.
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
