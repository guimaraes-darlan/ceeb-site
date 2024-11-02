"use client";

import { Box, Typography } from "@mui/material";
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
      {lectures.map((lecture) => (
        <CardCalendar key={lecture.id} lecture={lecture} />
      ))}
    </Box>
  );
}
