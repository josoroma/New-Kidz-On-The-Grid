import Content from "@/components/content";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="custom-page">
      <h2>Listing Page ID: {id}</h2>
      <p>Short-form content.</p>
    </div>
  );
}
