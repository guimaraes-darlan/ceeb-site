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
          <Link style={styleLinkItem} href="/estatuto">
            <MenuItem onClick={handleClose}>Estatuto</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/diretoria">
            <MenuItem onClick={handleClose}>Diretoria</MenuItem>
          </Link>
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
          <Link style={styleLinkItem} href="/escala-exposicoes">
            <MenuItem onClick={handleClose2}>
              Escala de Exposições Doutrinárias
            </MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/atendimento-fraterno">
            <MenuItem onClick={handleClose2}>Atendimento Fraterno</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/estudo">
            <MenuItem onClick={handleClose2}>
              Estudo da Doutrina Espírita
            </MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/cirurgias">
            <MenuItem onClick={handleClose2}>Cirurgias Espirituais</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/equilibrio">
            <MenuItem onClick={handleClose2}>Equilíbrio Espiritual</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/desobsessao">
            <MenuItem onClick={handleClose2}>
              Tratamento de Desobsessão
            </MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/evangelizacao">
            <MenuItem onClick={handleClose2}>Evangelização</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/irradiacao">
            <MenuItem onClick={handleClose2}>Irradiação</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/biblioteca">
            <MenuItem onClick={handleClose2}>Biblioteca</MenuItem>
          </Link>
          <Divider />
          <Link style={styleLinkItem} href="/campanhas">
            <MenuItem onClick={handleClose2}>Campanhas</MenuItem>
          </Link>
        </Menu>
        <Link style={styleLink} href="/horarios">
          <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
            Horários
          </Button>
        </Link>
        <Link style={styleLink} href="/contato">
          <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
            Contato
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
export default Navbar;
