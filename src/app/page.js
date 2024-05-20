import BlogCard from "@/components/home/BlogCard";
import { Container, Typography } from "@mui/material";

async function getBlogData() {
  const res = await fetch("https://blog-server-hazel.vercel.app/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const { data } = await getBlogData();
  return (
    <Container sx={{ my: 6 }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center" }}
        gutterBottom
      >
        Blog Posts
      </Typography>
      <BlogCard data={data} />
    </Container>
  );
}
