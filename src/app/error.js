"use client"; // Error components must be Client Components

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        textAlign: "center",
        height: "calc(100vh - 370px)",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Something went wrong!
      </Typography>
      <Button
        size="small"
        color="inherit"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
      <Link href="/">
        <Button size="small" sx={{ mx: 2 }}>
          Back To Home Page
        </Button>
      </Link>
    </Box>
  );
}
