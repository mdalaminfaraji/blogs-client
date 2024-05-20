import { formatDate } from "@/utils/formatDate";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
async function getSingleBlogData(blogId) {
  console.log(blogId);
  const res = await fetch(
    `https://blog-server-hazel.vercel.app/posts/${blogId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function BlogDetailPage({ params }) {
  const { blogId } = params;
  console.log(blogId);
  const { data } = await getSingleBlogData(blogId);
  console.log(data);
  return (
    <Container sx={{ my: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "100%",
            }}
          >
            <Image
              src={data?.imageurl}
              alt={data?.title}
              layout="fill" // Fill the container
              // objectFit="cover" // Cover container while maintaining aspect ratio
              style={{ borderRadius: "10px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">{data.title}</Typography>

          <Box sx={{ display: "flex", mb: 3 }}>
            <Typography
              sx={{
                borderRight: "2px solid gray",

                pr: 2,
              }}
            >
              {data?.subtitle}
            </Typography>
            <Typography sx={{ px: 2 }}>Author: {data.author}</Typography>
          </Box>
          <Typography>Description</Typography>
          <Typography>{data?.description}</Typography>
          <Typography sx={{ my: 2 }}>
            Reading Time: {data.readtime} minute
          </Typography>
          <Typography sx={{ my: 2 }}>
            CreatedAt: {formatDate(data?.created_at)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
