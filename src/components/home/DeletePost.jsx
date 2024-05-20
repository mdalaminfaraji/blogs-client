import { Button } from "@mui/material";
import React from "react";

export default function DeletePost({ id }) {
  console.log("click", id);
  return (
    <Button size="small" color="error">
      delete
    </Button>
  );
}
