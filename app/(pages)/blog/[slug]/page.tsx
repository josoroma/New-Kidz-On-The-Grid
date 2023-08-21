import Content from "@/components/content";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="custom-page">
      <h2>Blog Page Slug: {slug}</h2>
      <Content />
    </div>
  );
}
