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

export default function BlogCard({ data }) {
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                  {posts?.subtitle.slice(0, 20)}..
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {posts?.description.slice(0, 150)}...
                </Typography>
              </CardContent>
              <CardActions sx={{ width: "160px", mx: "auto" }}>
                <Link href={`/${posts.id}`}>
                  <Button size="small" sx={{ py: "4px" }}>
                    view Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
