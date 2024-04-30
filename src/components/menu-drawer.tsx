"use client";

import {
  List,
  ListItem,
  Drawer,
  Box,
  Typography,
  Divider,
  Container,
} from "@mui/material";
import Link from "next/link";
import { ReactEventHandler } from "react";

export type MenuDrawerProps = {
  open: boolean;
  onClose: ReactEventHandler;
};

type ItemsProps = {
  label: string;
  link: string;
};

const items: ItemsProps[] = [
  { label: "Home", link: "/" },
  { label: "Estatuto", link: "/estatuto" },
  { label: "Diretoria", link: "/diretoria" },
  { label: "Escala de Exposições Doutrinárias", link: "/escala-exposicoes" },
  { label: "Atendimento Fraterno", link: "/atendimento-fraterno" },
  { label: "Estudo da Doutrina Espírita", link: "/estudo" },
  { label: "Cirurgias Espirituais", link: "/cirurgias" },
  { label: "Equilíbrio Espiritual", link: "/equilibrio" },
  { label: "Tratamento de Desobsessão", link: "/desobsessao" },
  { label: "Evangelização", link: "/evangelizacao" },
  { label: "Irradiação", link: "/irradiacao" },
  { label: "Biblioteca", link: "/biblioteca" },
  { label: "Horários", link: "/horarios" },
  { label: "Contato", link: "/contato" },
];

export default function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} onKeyDown={onClose}>
      <Box width={350} onClick={onClose}>
        <Box paddingTop={10}>
          <List>
            {items.map((item) => (
              <ListItem key={item.label}>
                <Link
                  href={item.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Container sx={{ width: "300px" }}>
                    <Typography fontWeight="bold" fontSize={20}>
                      {item.label}
                    </Typography>
                    <Divider />
                  </Container>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
