import { useState } from "react";

export const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState<string | string[]>("");
  const [typeModal, setTypeModal] = useState<"error" | "success" | "info">(
    "error"
  );
  const [linkModal, setLinkModal] = useState("");

  const setMessageAndType = (
    message: string | string[],
    type: "error" | "success" | "info"
  ) => {
    setMessages(message);
    setTypeModal(type);
  };

  return {
    showModal,
    messages,
    typeModal,
    linkModal,
    setShowModal,
    setMessages,
    setTypeModal,
    setLinkModal,
    setMessageAndType,
  };
};
