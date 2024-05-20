import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.map((posts) => {
          return (
            <Grid key={posts.id} item xs={12} sm={6} lg={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  padding: "10px",
                  mx: "auto",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    backgroundColor: "grey",
                    px: 1,
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "14px",
                    margin: "5px",
                  }}
                >
                  {posts.title}
                </Typography>
                <CardMedia
                  component="img"
                  height="140"
                  image={posts.imageurl}
                  alt={posts.title}
                  sx={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {posts?.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {posts?.description.slice(0, 150)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/${posts.id}`}>
                    <Button size="small">view Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
