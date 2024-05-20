"use client";

import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function DeletePost({ id }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://blog-server-hazel.vercel.app/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Blog post deleted successfully ");

        setOpen(false);

        router.push("/");
      } else {
        toast.error("Failed to delete the blog post");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the blog post", error);
    }
  };

  return (
    <>
      <Button color="error" onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this blog?"}
        </DialogTitle>
        <DialogActions>
          <Button color="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
