import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import TitlePage from "../../components/title-page";
import { Circle } from "@mui/icons-material";

export default function DiretoriaPage() {
  const generateItem = (title: string, subTitle: string) => {
    return (
      <ListItem key={title} alignItems="flex-start">
        <ListItemIcon>
          <Circle sx={{ fontSize: 15 }} />
        </ListItemIcon>
        <ListItemText primary={title} secondary={subTitle} />
      </ListItem>
    );
  };
  const items = [
    generateItem("Rosângela A. T.", "Presidente"),
    generateItem("José G. R.", "Vice-Presidente"),
    generateItem("Letícia M. L.", "Secretária"),
    generateItem("Renan G. R.", "Tesoureiro"),
  ];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <TitlePage title="Diretoria" />
      <Container sx={{ height: "3rem" }} />
      <Typography fontWeight="bold" variant="h6">
        Membros da Diretoria da Casa Espírita Eurípedes Barsanulpho:
      </Typography>
      <Container sx={{ height: "1rem" }} />

      <Container sx={{ marginLeft: "10rem" }}>
        <List>{items}</List>
      </Container>
    </Box>
  );
}
