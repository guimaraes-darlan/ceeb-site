/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import { PageHeader } from "../../../../components/page-header";
import { z } from "zod";
import { SpeakerModel } from "../../../../models/speaker";
import { useModal } from "../../../../components/hooks/useModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputText } from "../../../../components/FormInputText";
import Link from "next/link";
import { saveSpeaker } from "../../../../service/speaker/saveSpeaker";
import { getRequestErrors } from "../../../../errors/get-request-errors";
import Loading from "../../../../components/Loading";
import ModalInfo from "../../../../components/modal-info";

const speakerSchema = z.object({
  id: z.string(),
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, "Nome é obrigatório"),
  house: z
    .string({ required_error: "Instituição é obrigatório" })
    .min(1, "Instituição é obrigatório"),
});

const defaultValues = {
  id: "",
  name: "",
  house: "",
};

type SpeakerZodProps = z.infer<typeof speakerSchema>;

export type SpeakerFormProps = {
  speaker?: SpeakerModel | null;
};

export default function SpeakerFormPage({ speaker }: SpeakerFormProps) {
  const [showLoading, setShowLoading] = useState(false);
  const modal = useModal();

  useEffect(() => {
    if (speaker) {
      reset({
        id: speaker.id!,
        name: speaker.name,
        house: speaker.house,
      });
    }
  }, []);

  const { handleSubmit, control, reset } = useForm<SpeakerZodProps>({
    defaultValues,
    resolver: zodResolver(speakerSchema),
  });

  const onSubmit: SubmitHandler<SpeakerZodProps> = async (data) => {
    modal.setLinkModal("");
    setShowLoading(true);

    const speaker: SpeakerModel = {
      ...data,
      id: data.id ? data.id : null,
    };
    const method = data.id ? "PUT" : "POST";
    try {
      const response = await saveSpeaker(speaker, method);
      if (response.ok) {
        modal.setTypeModal("success");
        modal.setMessages(
          `Dados ${data.id ? "atualizados" : "cadastrados"} com sucesso`
        );
        modal.setLinkModal("/speaker");
      } else {
        const errors = await getRequestErrors(response);
        modal.setMessages(errors);
        modal.setTypeModal("error");
      }
    } catch (error) {
      modal.setMessages("Erro ao salvar");
      modal.setTypeModal("error");
    }
    modal.setShowModal(true);
    setShowLoading(false);
  };

  return (
    <>
      <Loading open={showLoading} handleClose={setShowLoading} />
      <ModalInfo
        open={modal.showModal}
        handleClose={modal.setShowModal}
        messages={modal.messages}
        type={modal.typeModal}
        link={modal.linkModal}
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader title="Cadastro de Palestrante" />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="name"
            label="Nome"
            control={control}
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            name="house"
            label="Instituição"
            control={control}
            required={true}
          />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Link href="/speaker">
              <Button variant="outlined" sx={{ marginRight: "1em" }}>
                Cancelar
              </Button>
            </Link>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Salvar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
