"use client";

import { List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

export default function MenuDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <List>
        <ListItem>item</ListItem>
      </List>
    </SwipeableDrawer>
  );
}
