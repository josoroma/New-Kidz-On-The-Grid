import ScrollMe from "@/components/scrollMe";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="customPage">
      <h2>Blog Page Slug: {slug}</h2>
      <ScrollMe />
    </div>
  );
}
