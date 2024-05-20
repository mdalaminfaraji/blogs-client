import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/facebook.png";
import instagramIcon from "@/assets/instagram.png";
import twitterIcon from "@/assets/twitter.png";
import linkedIcon from "@/assets/linkedin.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography
            color="#fff"
            component={Link}
            href="/"
            sx={{ textDecoration: "none" }}
          >
            Home
          </Typography>
          <Typography color="#fff">Create Blog</Typography>
          <Typography color="#fff">Contact</Typography>
          <Typography color="#fff">About us</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Blogs. All Rights Reserved.
          </Typography>
          <Typography variant="h5" fontWeight={600} color="white">
            B
            <Box component="span" color="primary.main">
              L
            </Box>
            OGs
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
