import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { LectureCalendarModel } from "../models/lectureCalendar";
import { getDayOfWeek } from "../util/dateUtil";
import dayjs from "dayjs";
import { Edit } from "@mui/icons-material";

interface CardCalendarProps {
  lecture: LectureCalendarModel;
  edit: (lecture: LectureCalendarModel) => Promise<void>;
}

export const CardLectureCalendar = ({ lecture, edit }: CardCalendarProps) => {
  return (
    <Box
      display="flex"
      alignItems="baseline"
      sx={{ border: 1, borderRadius: "16px", borderColor: "#808080" }}
      marginBottom="0.5em"
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "8em" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ fontSize: "1.8rem" }}>
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
        margin="0.5rem"
        sx={{ width: { xs: "280px", md: "580px" } }}
      >
        <Typography sx={{ fontSize: "1.5rem" }}>
          {lecture.speaker!.name}
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: "1rem" }}>
          Instituição: {lecture.speaker!.house}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ width: "8em" }}
        justifyContent="center"
        alignItems="center"
      >
        <Tooltip title="Editar">
          <IconButton onClick={() => edit(lecture)}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
