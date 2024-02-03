"use client";

import {
  Alert,
  AlertColor,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TitlePage from "../../../components/title-page";

export default function ContatoPage() {
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [messageAlert, setMessageAlert] = useState("");
  const [severityAlert, setSeverityAlert] = useState<AlertColor>("error");

  const send = async () => {
    setLoader(true);
    if (name === "" || phone === "" || subject === "" || message === "") {
      setMessageAlert("Preencha os campos obrigatórios");
      setOpen(true);
      return;
    }

    const emailMessage = {
      name,
      phone,
      email,
      subject,
      message,
    };

    const response = await fetch("/api/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailMessage),
      method: "POST",
    });

    if (response.ok) {
      setMessageAlert("E-mail enviado com sucesso");
      setSeverityAlert("success");
    } else {
      setMessageAlert("Não foi possível enviar a mensagem");
      setSeverityAlert("error");
    }
    setOpen(true);
    setLoader(false);
  };

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <TitlePage title="Contato" />

      <Container sx={{ height: "1rem" }} />
      <Container
        sx={{
          width: {
            sx: "100%",
            md: "70%",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Typography fontWeight="bold" variant="h5" align="center">
              Entre em contato conosco
            </Typography>
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              id="name"
              label="Nome"
              variant="outlined"
              required
              value={name}
              onChange={(input) => setName(input.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              id="email"
              label="E-mail"
              variant="outlined"
              value={email}
              onChange={(input) => setEmail(input.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              id="phone"
              label="Telefone"
              variant="outlined"
              required
              value={phone}
              onChange={(input) => setPhone(input.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              id="subject"
              label="Assunto"
              variant="outlined"
              required
              value={subject}
              onChange={(input) => setSubject(input.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              fullWidth
              id="text"
              label="Mensagem"
              variant="outlined"
              multiline
              required
              rows={4}
              value={message}
              onChange={(input) => setMessage(input.target.value)}
            />
          </Grid>
          <Grid
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" onClick={send}>
              Enviar
            </Button>
          </Grid>
          <Grid xs={12}>
            <Typography align="center">
              Se preferir, envie um e-mail: ceeuripedesbarsanulphosj@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={severityAlert} variant="filled">
            {messageAlert}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
