import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5" fontWeight={600}>
          B
          <Box component="span" color="primary.main">
            L
          </Box>
          OGS
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/" sx={{ textDecoration: "none" }}>
            Home
          </Typography>
          <Typography>Create Blog</Typography>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            Contact
          </Typography>
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            About Us
          </Typography>
        </Stack>

        <Button size="small">Login</Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
