import { Backdrop, CircularProgress } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface LoadingProps {
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const Loading = ({ open, handleClose }: LoadingProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 2000 }}
      open={open}
      onClick={() => handleClose(false)}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
