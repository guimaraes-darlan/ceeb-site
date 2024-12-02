/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import {
  LectureCalendarModel,
  LectureCalendarsModel,
} from "../../../models/lectureCalendar";
import { useModal } from "../../../components/hooks/useModal";
import Loading from "../../../components/Loading";
import ModalInfo from "../../../components/modal-info";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { PageHeader } from "../../../components/page-header";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/pt-br";
import { listLectureCalendar } from "../../../service/lectureCalendar/listLectureCalendar";
import { CardLectureCalendar } from "../../../components/cardLectureCalendarCalendar";
import { SpeakersModel } from "../../../models/speaker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { z } from "zod";
import { generateOptionsDropdown } from "../../../util/generateOptionsDropdown";
import { FormInputDate } from "../../../components/FormInputDate";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputDropdown } from "../../../components/FormInputDropdown";
import { saveLectureCalendar } from "../../../service/lectureCalendar/saveLectureCalendar";
import { getRequestErrors } from "../../../errors/get-request-errors";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

export type LectureCalendarPageProps = {
  lectures: LectureCalendarsModel;
  speakers: SpeakersModel;
};

const lectureCalendarSchema = z.object({
  id: z.string(),
  date: z.custom<Dayjs>((val) => val instanceof dayjs, "Data inválida"),
  speakerId: z.string().min(1, "Palestrante é obrigatório"),
});

const defaultValues = {
  id: "",
  speakerId: "",
  date: dayjs(),
};

type LectureCalendarModalZodProps = z.infer<typeof lectureCalendarSchema>;

export default function LectureCalendarPage({
  lectures,
  speakers,
}: LectureCalendarPageProps) {
  const {
    showModal,
    setShowModal,
    messages,
    setMessages,
    setTypeModal,
    typeModal,
  } = useModal();
  const [showLoading, setShowLoading] = useState(false);
  const [lectureCalendars, setLectureCalendars] =
    useState<LectureCalendarsModel>(lectures);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [expandForm, setExpandForm] = useState(false);
  const [lectureSelected, setLectureSelected] =
    useState<LectureCalendarModel | null>();
  const [optionsSpeaker, setOptionsSpeaker] = useState<JSX.Element[]>([]);

  useEffect(() => {
    populateOptionsSpeaker();
  }, []);

  useEffect(() => {
    search();
  }, [date]);

  const populateOptionsSpeaker = () => {
    const options = speakers.map((item) => {
      return {
        label: `${item.name} (${item.house})`,
        value: item.id!,
      };
    });
    setOptionsSpeaker(generateOptionsDropdown(options, "Selecione"));
  };

  const search = async () => {
    if (date) {
      const response = await listLectureCalendar(date.month(), date.year());
      const data = await response.json();
      setLectureCalendars(data.data);
    }
  };

  const edit = async (lecture: LectureCalendarModel) => {
    console.log("edit");
    setExpandForm(true);
    reset({
      id: lecture.id!,
      date: dayjs(lecture.date),
      speakerId: lecture.speakerId,
    });
  };

  const { handleSubmit, control, reset } =
    useForm<LectureCalendarModalZodProps>({
      defaultValues,
      resolver: zodResolver(lectureCalendarSchema),
    });

  const onSubmit: SubmitHandler<LectureCalendarModalZodProps> = async (
    data
  ) => {
    setShowLoading(true);

    const lectureCalendar: LectureCalendarModel = {
      id: data.id ? data.id : null,
      date: data.date.toDate(),
      speakerId: data.speakerId,
    };

    const method = data.id ? "PUT" : "POST";
    try {
      const response = await saveLectureCalendar(lectureCalendar, method);
      if (response.ok) {
        setTypeModal("success");
        setMessages(
          `Dados ${data.id ? "atualizados" : "cadastrados"} com sucesso`
        );
        await search();
        setExpandForm(false);
      } else {
        const errors = await getRequestErrors(response);
        setMessages(errors);
        setTypeModal("error");
      }
    } catch (error) {
      setMessages("Erro ao salvar");
      setTypeModal("error");
    }
    setShowModal(true);
    setShowLoading(false);
  };

  return (
    <>
      <Loading open={showLoading} handleClose={setShowLoading} />
      <ModalInfo
        open={showModal}
        handleClose={setShowModal}
        messages={messages}
        type={typeModal}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PageHeader title="Escala de Exposições Doutrinárias" />
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              value={date}
              onChange={(value) => setDate(value)}
              views={["month", "year"]}
              timezone="America/Sao_Paulo"
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion
              expanded={expandForm}
              onChange={() => setExpandForm(!expandForm)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1-header"
              >
                <Typography>Adicionar</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <FormInputDate
                      control={control}
                      label="Data"
                      name="date"
                      required={true}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <FormInputDropdown
                      control={control}
                      label="Palestrante"
                      name="speakerId"
                      required={true}
                      options={optionsSpeaker}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Salvar
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            {lectureCalendars?.map((lecture) => {
              return (
                <CardLectureCalendar
                  key={lecture.id}
                  lecture={lecture}
                  edit={edit}
                />
              );
            })}
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}
