"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import TitlePage from "../../../components/title-page";
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
          <Typography sx={{ marginTop: "1rem", fontWeight: "bold" }}>
            Estamos arrecadando:
          </Typography>
        </Box>
        <Typography>- Leite</Typography>
        <Typography>- Café</Typography>
        <Typography>- Biscoito</Typography>
      </Container>
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
            marginTop: "1rem",
          },
        }}
      >
        <Divider />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography fontWeight="bold" variant="h5">
            Entrega de donativos (21/04/2024)
          </Typography>
          <Typography fontWeight="bold" variant="h6">
            Agradecemos a todos pelas doações
          </Typography>
        </Box>
        <ImageList
          sx={{
            width: "100%",
          }}
          cols={2}
          rowHeight={300}
        >
          <ImageListItem>
            <Image
              src="/images/doca/img-1.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-1"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-3.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-3"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-4.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-4"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-5.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-5"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-6.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-6"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-7.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-7"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-8.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-8"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-9.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-9"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
          <ImageListItem>
            <Image
              src="/images/doca/img-10.jpg"
              layout="fill"
              objectFit="contain"
              alt="img-10"
              style={{ maxWidth: "400px" }}
            />
          </ImageListItem>
        </ImageList>
      </Container>
    </Box>
  );
}
