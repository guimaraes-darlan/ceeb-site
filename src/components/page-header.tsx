import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export type PageHeaderProps = {
  title: string;
  showNewButton?: boolean;
  routeNewButton?: string;
  labelNewButton?: string;
};

export const PageHeader = ({
  title,
  showNewButton = false,
  routeNewButton,
  labelNewButton,
}: PageHeaderProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box display="flex" justifyContent="flex-start" alignContent="baseline">
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        {showNewButton && (
          <Box display="flex" justifyContent="flex-end" alignContent="baseline">
            <Link href={routeNewButton || "/"}>
              <Button variant="contained"> {labelNewButton || "Novo"}</Button>
            </Link>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
