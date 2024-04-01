import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ width: "100%", backgroundColor: "#ececec" }}
    >
      <Divider variant="middle" flexItem />
      <Typography variant="subtitle1" color="gray">
        Casa Espírita Eurípedes Barsanulpho - {new Date().getFullYear()}
      </Typography>
      <Typography variant="subtitle2" color="gray">
        <Link
          href="https://maps.google.com/maps?z=16&q=rua%2Bflomape%2C%2B1342%2B-%2Breal%2Bparque%2Bs%C3%A3o%2Bjos%C3%A9%2B-%2Bsc%2B-%2Bcep%3A%2B88.113%2B-%2B220"
          target="_blank"
          style={{ color: "gray" }}
        >
          Rua Flomape, 1342 - Real Parque - São José - SC - CEP: 88113-220
        </Link>
      </Typography>
    </Box>
  );
}
