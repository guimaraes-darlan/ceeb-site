/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { PageHeader } from "../../../components/page-header";
import { SpeakerModel, SpeakersModel } from "../../../models/speaker";
import DataTable, {
  DataTableColumn,
  DataTableRow,
} from "../../../components/DataTable";
import Link from "next/link";
import { Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useTable } from "../../../components/hooks/useTable";
import React from "react";
import Loading from "../../../components/Loading";
import ModalInfo from "../../../components/modal-info";
import { useModal } from "../../../components/hooks/useModal";

export type SpeakerPageProps = {
  speakers: SpeakersModel;
};

export default function SpeakerPage({ speakers }: SpeakerPageProps) {
  const { page, rows, totalRows, setPage, setRows, setTotalRows } = useTable();
  const { showModal, setShowModal, messages, setMessages } = useModal();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    populateDataTable(speakers);
  }, []);

  const columns: DataTableColumn[] = [
    { label: "Nome" },
    { label: "Instituição" },
    { label: "Ações", align: "right" },
  ];

  const populateDataTable = (data: SpeakersModel) => {
    const items: DataTableRow[] = data.map((item: SpeakerModel) => {
      return {
        key: item.id!,
        row: [
          { value: item.name },
          { value: item.house },
          {
            value: (
              <Box>
                <Link href={`/speaker/form/${item.id}`}>
                  <IconButton>
                    <Tooltip title="Editar">
                      <Edit />
                    </Tooltip>
                  </IconButton>
                </Link>
              </Box>
            ),
            align: "right",
          },
        ],
      };
    });
    setRows(items);
  };

  const search = async (page: number, rowsPerPage: number) => {};

  return (
    <>
      <Loading open={showLoading} handleClose={setShowLoading} />
      <ModalInfo
        open={showModal}
        handleClose={setShowModal}
        messages={messages}
        type="info"
      />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader
            title="Palestrantes"
            showNewButton={true}
            labelNewButton="Novo"
            routeNewButton="/speaker/form"
          />
        </Grid>
        <Grid item xs={12}>
          <DataTable
            columns={columns}
            data={rows}
            page={page}
            rowsPerPage={10}
            totalRows={totalRows}
            execute={search}
          />
        </Grid>
      </Grid>
    </>
  );
}
