import { Box, Divider, Typography } from "@mui/material";
import { LectureCalendarModel } from "../models/lectureCalendar";
import { getDayOfWeek } from "../util/dateUtil";
import dayjs from "dayjs";

interface CardCalendarProps {
  lecture: LectureCalendarModel;
}

export const CardCalendar = ({ lecture }: CardCalendarProps) => {
  return (
    <Box
      display="flex"
      alignItems="baseline"
      sx={{ border: 1, borderRadius: "16px", borderColor: "#808080" }}
      marginBottom="0.3em"
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "8em" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ fontSize: "1.5rem" }}>
          {dayjs(lecture.date).get("date")}
        </Typography>
        <Typography sx={{ fontSize: "1rem" }}>
          {getDayOfWeek(lecture.date)}
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        display="flex"
        flexDirection="column"
        margin="0.3rem"
        sx={{ width: { xs: "280px", md: "580px" } }}
      >
        <Typography sx={{ fontSize: "1.3rem" }}>
          {lecture.speaker!.name}
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: "1rem" }}>
          Instituição: {lecture.speaker!.house}
        </Typography>
      </Box>
    </Box>
  );
};
