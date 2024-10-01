import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "next/link";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type MenuLinkProps = {
  label: string;
  link: string;
};

const menuLinks: MenuLinkProps[] = [
  { label: "Home", link: "/admin" },
  { label: "Contas", link: "/invoice" },
  { label: "Empréstimos e Devoluções", link: "/lending" },
  { label: "Livros", link: "/book" },
  { label: "Leitores", link: "/reader" },
  { label: "Categorias", link: "/categories" },
  { label: "Anotações", link: "/notes" },
  { label: "Escala de Exposições", link: "/lectureCalendar" },
  { label: "Palestrantes", link: "/speakers" },
  { label: "Sair", link: "/#" },
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
      </List>
    </Container>
  );
}
export default NavbarAdmin;
