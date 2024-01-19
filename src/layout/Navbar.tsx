"use client";

import { MouseEvent, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Divider, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import Link from "next/link";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const styleLink = { color: "white", textDecoration: "none" };
  const styleLinkItem = { color: "black", textDecoration: "none" };

  return (
    <Container maxWidth="xl">
      <Box display="flex" justifyContent="flex-end">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Link style={styleLink} href="/">
            Início
          </Link>
        </Button>
        <Button
          key="whoWeAre"
          sx={{
            my: 2,
            color: "white",
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
          }}
          onClick={handleClick}
        >
          Quem Somos <ArrowDropDown />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link style={styleLinkItem} href="/estatuto">
              Estatuto
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Link style={styleLinkItem} href="/diretoria">
              Diretoria
            </Link>
          </MenuItem>
        </Menu>
        <Button
          key="home"
          sx={{
            my: 2,
            color: "white",
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
          }}
          onClick={handleClick2}
        >
          Atividades <ArrowDropDown />
        </Button>
        <Menu
          id="menu-2"
          aria-labelledby="sub-menu-2"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
        >
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/escala-exposicoes">
              Escala de Exposições Doutrinárias
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/atendimento-fraterno">
              Atendimento Fraterno
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/estudo">
              Estudo da Doutrina Espírita
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/cirurgias">
              Cirurgias Espirituais
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/desobsessao">
              Tratamento de Desobsessão
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/evangelizacao">
              Evangelização
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose2}>
            <Link style={styleLinkItem} href="/biblioteca">
              Biblioteca
            </Link>
          </MenuItem>
        </Menu>
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Link style={styleLink} href="/horarios">
            Horários
          </Link>
        </Button>
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Link style={styleLink} href="/contato">
            Contato
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
export default Navbar;
