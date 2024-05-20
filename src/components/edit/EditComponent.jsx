"use client";

import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Invalid Image URL"),
  author: z.string().min(1, "Author is required"),
  readTime: z.number().min(1, "Read time must be a positive number"),
});

export default function EditComponent({ data, id }) {
  const router = useRouter();
  const defaultValues = {
    title: data?.title,
    subtitle: data?.subtitle,
    description: data?.description,
    imageUrl: data?.imageurl,
    author: data?.author,
    readTime: data?.readtime,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://blog-server-hazel.vercel.app/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Blog post updated successfully");
        router.push("/");
      } else {
        toast.error("Failed to update the blog post");
      }
    } catch (error) {
      toast.error("An error occurred while updating the blog post");
    }
  };
  return (
    <Container sx={{ my: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Update Blog
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          size="small"
          label="Title"
          {...register("title")}
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={errors.title?.message}
          required
        />
        <TextField
          size="small"
          label="Subtitle"
          {...register("subtitle")}
          fullWidth
          margin="normal"
          error={!!errors.subtitle}
          helperText={errors.subtitle?.message}
          required
        />
        <TextField
          size="small"
          label="Description"
          {...register("description")}
          fullWidth
          margin="normal"
          error={!!errors.description}
          helperText={errors.description?.message}
          required
          multiline
          rows={4}
        />
        <TextField
          size="small"
          label="Image URL"
          {...register("imageUrl")}
          fullWidth
          margin="normal"
          error={!!errors.imageUrl}
          helperText={errors.imageUrl?.message}
        />
        <TextField
          size="small"
          label="Author"
          {...register("author")}
          fullWidth
          margin="normal"
          error={!!errors.author}
          helperText={errors.author?.message}
          required
        />
        <TextField
          size="small"
          label="Read Time"
          type="number"
          {...register("readTime", { valueAsNumber: true })}
          fullWidth
          margin="normal"
          error={!!errors.readTime}
          helperText={errors.readTime?.message}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          update
        </Button>
      </form>
    </Container>
  );
}
