"use client";

import { Box, Container, Typography } from "@mui/material";
import TitlePage from "../../../components/title-page";
import { getMonth } from "../../../util/dateUtil";
import { CardCalendar } from "../../../components/cardCalendar";
import { LectureCalendarsModel } from "../../../models/lectureCalendar";

export type EscalaPageProps = {
  lectures: LectureCalendarsModel;
};

export default function EscalaPage({ lectures }: EscalaPageProps) {
  const actualDate = new Date();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Escala de Exposições Doutrinárias" />
      <Typography variant="h5" sx={{ paddingBottom: "0.6rem" }}>
        <strong>
          {getMonth(actualDate)} de {actualDate.getFullYear()}
        </strong>
      </Typography>
      <Box
        sx={{
          border: "2px solid #1976d2",
          borderRadius: "8px",
          padding: "1.5rem",
          backgroundColor: "#f5faff",
        }}
      >
        <Typography align="center" variant="h5" fontWeight="bold">
          Estaremos em recesso entre os dias 14/12/2025 e 18/01/2026.
        </Typography>
        <Container sx={{ height: "1rem" }} />
        <Typography align="center" variant="h5" fontWeight="bold">
          Retorno das atividades em 19/01/2026.
        </Typography>
      </Box>
      <Container sx={{ height: "2rem" }} />
      {lectures.map((lecture) => (
        <CardCalendar key={lecture.id} lecture={lecture} />
      ))}
    </Box>
  );
}
