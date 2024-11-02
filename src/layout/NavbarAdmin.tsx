"use client";

import Container from "@mui/material/Container";
import Link from "next/link";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { signOut } from "../../auth";

type MenuLinkProps = {
  label: string;
  link: string;
};

const menuLinks: MenuLinkProps[] = [
  { label: "Home", link: "/admin" },
  { label: "Contas", link: "/invoice" },
  { label: "Relatório", link: "/report" },
  // { label: "Empréstimos e Devoluções", link: "/lending" },
  // { label: "Livros", link: "/book" },
  // { label: "Leitores", link: "/reader" },
  // { label: "Categorias", link: "/categories" },
  // { label: "Anotações", link: "/notes" },
  { label: "Escala de Exposições", link: "/lectureCalendar" },
  { label: "Palestrantes", link: "/speaker" },
];

function NavbarAdmin() {
  return (
    <Container maxWidth="xl">
      <List>
        {menuLinks.map((menu) => (
          <ListItem key={menu.label} disablePadding>
            <Link
              href={menu.link}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemButton sx={{ width: "10rem" }}>
                <ListItemText primary={menu.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ width: "10rem" }} onClick={() => signOut()}>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </Container>
  );
}
export default NavbarAdmin;
