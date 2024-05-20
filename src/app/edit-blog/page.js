import EditComponent from "@/components/edit/EditComponent";
async function getSingleBlogData(id) {
  const res = await fetch(`https://blog-server-hazel.vercel.app/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function EditBlogPage({ searchParams }) {
  const { id } = searchParams;
  const { data } = await getSingleBlogData(id);

  return <EditComponent data={data} id={id} />;
}
