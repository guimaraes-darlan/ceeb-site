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
        width={275 * 0.8}
        height={300 * 0.8}
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
          O Estudo da Doutrina Espírita é aberto ao público e visa proporcionar
          o conhecimento amplo da Doutrina Espírita codificada por Allan Kardec
          de forma regular, metódica, contínua, séria, sistematizada e
          totalmente gratuita. <br />
          Para maiores informações sobre os grupos de estudos novos ou em
          andamento, venha a nossa Casa nos dias de Exposição Doutrinária e
          procure um trabalhador do dia.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography fontWeight="bold">
          Para maiores informações sobre os grupos de estudos novos ou em
          andamento, venha a nossa Casa nos dias de Exposição Doutrinária e
          procure um trabalhador do dia.
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
