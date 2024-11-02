import { Dispatch, SetStateAction } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Link from "next/link";

export type ModalInfoProps = {
  type: "error" | "success" | "info";
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
  messages: string[] | string;
  title?: string;
  link?: string;
};

export default function ModalInfo({
  type,
  open,
  handleClose,
  messages,
  title,
  link,
}: ModalInfoProps) {
  const generateMessage = () => {
    if (Array.isArray(messages)) {
      return (
        <div className="gird grid-cols-1 gap-3">
          {messages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </div>
      );
    } else {
      return <div>{messages}</div>;
    }
  };

  const getTitle = () => {
    if (type === "error") {
      return <h1 className="font-bold text-danger">{title || "Atenção"}</h1>;
    }
    if (type === "info") {
      return <h1 className="font-bold">{title || "Informação"}</h1>;
    }
    return <h1 className="font-bold">{title || "Operação realizada"}</h1>;
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>{generateMessage()}</DialogContent>
      <DialogActions>
        {link ? (
          <Link href={link}>
            <Button onClick={() => handleClose(false)}>Fechar</Button>
          </Link>
        ) : (
          <Button onClick={() => handleClose(false)}>Fechar</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
