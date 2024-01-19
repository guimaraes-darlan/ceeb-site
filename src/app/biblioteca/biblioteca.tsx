"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../components/title-page";
import Image from "next/image";
import ConsulteHorarios from "../../components/consulte-horarios";

export default function BibliotecaPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Biblioteca" />
      <Image
        src="/images/livro.jpeg"
        alt="atendimento fraterno"
        width="600"
        height="320"
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
          <p>
            As obras disponibilizadas na <b>Biblioteca</b> da{" "}
            <b>Casa Espírita Eurípedes Barsanulpho</b> para empréstimo aos
            frequentadores e as que se destinam à comercialização na livraria,
            são rigorosamente fiéis à Doutrina Espírita codificada por Allan
            Kardec.
          </p>
          <p>
            * Para que possam usufruir do empréstimo das obras, os
            frequentadores da Casa Espirita Eurípedes Barsanulpho devem se
            <b>cadastrar</b> junto à biblioteca.
          </p>
          <p>
            * O <b>empréstimo</b> de livros e vídeos é inteiramente{" "}
            <b>gratuito</b>, sendo o empréstimo de livros por um período de{" "}
            <b>30 dias, renováveis</b> por mais 30 dias, e de uma semana para os
            vídeos.
          </p>
          <p>
            <b>
              * A não devolução das obras no prazo acarreta na aplicação de
              multa no valor de R$1,00 (um real) por dia de atraso.
            </b>
          </p>
          <p>
            * Cada frequentador somente pode pegar para empréstimo um livro e/ou
            um vídeo por vez, não sendo permitido o empréstimo de outra obra
            enquanto não houver sido devolvida a que foi retirada anteriormente.
          </p>
          <p>
            * O empréstimo de obras da biblioteca e a comercialização de obras
            da livraria se verifica nos dias de exposições doutrinárias, 30
            minutos antes e 30 minutos após a exposição doutrinária, não podendo
            esta atividade ser realizada durante a exposição doutrinária.
          </p>
          <p>
            * Em caso de perda ou extravio de livro ou vídeo, aquele que o
            retirou por empréstimo deverá fazer a doação de outro, de mesmo
            título, autor e editora. Em caso da não existência do produto no
            mercado, caberá ao dirigente do Departamento Doutrinário aprovar a
            substituição por outro similar.
          </p>
        </Typography>
        <ConsulteHorarios />
      </Container>
    </Box>
  );
}
