"use client";

import { Button, Grid, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { PageHeader } from "../../../components/page-header";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Download } from "@mui/icons-material";
import Loading from "../../../components/Loading";
import ModalInfo from "../../../components/modal-info";
import { useModal } from "../../../components/hooks/useModal";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

export default function ReportPage() {
  const [showLoading, setShowLoading] = useState(false);

  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const {
    showModal,
    setShowModal,
    messages,
    setMessages,
    setTypeModal,
    typeModal,
  } = useModal();

  const generateReport = async () => {};

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
            <PageHeader title="Relatório de Contas" showNewButton={false} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Selecione o mês para gerar o relatório
            </Typography>
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
            <Button variant="contained" startIcon={<Download />}>
              Gerar Relatório
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </>
  );
}
