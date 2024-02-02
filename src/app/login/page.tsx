"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormInputText } from "../../components/FormInputText";

type LoginInput = {
  username: string;
  password: string;
};

type PageProps = {
  searchParams: { error?: string };
};

const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email({ message: "E-mail inválido" }),
  password: z.string().min(1, { message: "Senha é obrigatório" }),
});

type LoginProps = z.infer<typeof loginSchema>;

export default function LoginPage({ searchParams }: PageProps) {
  const { register, handleSubmit, control } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (res?.ok) {
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Área restrita
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <FormInputText
              name="username"
              control={control}
              label="E-mail"
              required={true}
            />
            <Container sx={{ padding: "1rem" }} />
            <FormInputText
              name="password"
              control={control}
              label="Senha"
              type="password"
              required={true}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
